import { utils } from "../common/utils";
import { GlobalData } from "./GlobalData";
import { UrlConfig } from "./UrlConfig";



export module SignInManager {
    var STORAGE_KEY = "lastSignDate";
    const AD_COUNT_KEY = "adWatchData"; // ✅ 存储广告观看次数
    const USERS_KEY = "userList";
    const CURRENT_USER_KEY = "currentUser";

    export interface UserInfo {
        token: string;
        name: string;
        ad_watch_count: number;
        lastSignDate?: string; // ✅ 新增：记录最后签到日期（yyyy-mm-dd）
    }

    // interface UserInfo {
    //     token: string;
    //     name: string;
    // }

    /**
     * 获取今天日期字符串，格式：yyyy-mm-dd
     */
    export function getTodayDateStr(): string {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    /** 是否今日已签到（基于当前用户） */
    export function isTodaySigned(): boolean {
        const user = getCurrentUser();
        if (!user) return false;
        return user.lastSignDate === getTodayDateStr();
    }

    export function signToday(): void {
        const user = getCurrentUser();
        if (!user) return;

        user.lastSignDate = getTodayDateStr();

        // 更新到用户列表与本地存储
        updateUser(user);
        console.log(`✅ 用户 ${user.name} 今日签到成功！`);
    }

    /** 重置签到（调试用） */
    export function resetSign(): void {
        const user = getCurrentUser();
        if (!user) return;

        user.lastSignDate = "";
        updateUser(user);
        console.log(`🔄 用户 ${user.name} 签到状态已重置`);
    }

    /** ✅ 更新指定用户信息（内部用） */
    function updateUser(user: UserInfo) {
        const list = getUserList();
        const idx = list.findIndex(u => u.token === user.token);
        if (idx >= 0) list[idx] = user;
        saveUserList(list);

        // 如果当前用户是这个人，也更新 currentUser
        const current = getCurrentUser();
        if (current && current.token === user.token) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        }
    }

    // ============================================================
    // ✅ 以下是“每日广告次数”功能
    // ============================================================

    const MAX_DAILY_ADS = 30;

    interface AdWatchData {
        date: string;
        count: number;
    }

    /**
     * 增加一次观看次数
     * @returns 是否还能观看（false 表示达到上限）
     */
    export function addAdWatch(onSuccess?: (data: any) => void) {
        const url = `${UrlConfig.getHttpUrl()}api/User/incrementAdWatchCount`;
        SignInManager.postWithFetch(url, {token: GlobalData.loginInfo.token
        })
            .then(data => {
                console.log('返回啥:', JSON.stringify(data.data));
                if (Number(data?.code) === 200) {
                    GlobalData.userInfo.score = data.data.gold;
                    // GlobalData.userInfo.ad_watch_count = data.data.ad_watch_count;
                    // console.log("🎯 新的广告次数:", GlobalData.userInfo.ad_watch_count);
                    if (onSuccess) {
                        onSuccess(data);
                    }
                    // return GlobalData.userInfo.ad_watch_count;
                    utils.send(GlobalData.localEvent.UpdateScore);
                } else {
                    GlobalData.userInfo.ad_watch_count = GlobalData.userInfo.ad_watch_count;
                    console.error('接口非 200：', data);
                }
            })
            .catch(err => console.error(err));
    }

    /**
     * 获取剩余可观看次数
     */
    export async function getRemainingAds(onSuccess?: (data: any) => void) {
        const url = `${UrlConfig.getHttpUrl()}api/User/queryAdWatchInfo`;
        SignInManager.postWithFetch(url, {
            token: GlobalData.loginInfo.token
        })
            .then(data => {
                // console.log("📦 接口完整返回 data:", JSON.stringify(data));
                if (Number(data?.code) === 200) {
                    GlobalData.userInfo.ad_watch_count = data.data.ad_watch_count;
                    console.log('今日已观看>>:', data.data.ad_watch_count);
                    if (onSuccess) {
                        onSuccess(data);
                    }
                    // return GlobalData.userInfo.ad_watch_count;
                    // utils.send(GlobalData.localEvent.UpdateScore);
                } else {
                    GlobalData.userInfo.ad_watch_count = GlobalData.userInfo.ad_watch_count;
                    console.error('接口非 200：', data);
                }
            })
            .catch(err => console.error(err));
        // const data = getAdWatchData();
        // return Math.max(0, MAX_DAILY_ADS - data.count);
    }

    /**
     * 重置广告计数（调试或新的一天自动）
     */
    export function resetAdWatch(): void {
        localStorage.setItem(
            AD_COUNT_KEY,
            JSON.stringify({ date: getTodayDateStr(), count: 0 })
        );
    }

    export function getUserList(): UserInfo[] {
        const dataStr = localStorage.getItem(USERS_KEY);
        if (!dataStr) return [];
        try {
            return JSON.parse(dataStr) as UserInfo[];
        } catch {
            return [];
        }
    }

    function saveUserList(list: UserInfo[]) {
        localStorage.setItem(USERS_KEY, JSON.stringify(list));
    }

    export async function postWithFetch(url: string, data?: any): Promise<any> {
        let sendData = {
            token: GlobalData.loginInfo.token
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(sendData),
            });

            const text = await response.text();
            console.log('status:', response.status, 'body:', text.slice(0, 200));

            if (/<!doctype|<html/i.test(text))
                throw new Error('收到 HTML（登录/错误页）');

            return JSON.parse(text.replace(/^\uFEFF/, ''));
        } catch (err) {
            console.error('postWithFetch error:', err);
            throw err;
        }
    }

    export function addOrUpdateUser(user: UserInfo) {
        const list = getUserList();
        const index = list.findIndex(u => u.token === user.token);
        if (index >= 0) list[index] = user;
        else list.push(user);
        // switchUser(user.token);
        saveUserList(list);
    }

    export function switchUser(token: string): boolean {
        const user = getUserList().find(u => u.name === token);
        if (!user) {
            return false;
        }
        console.log('选择用户>>>');
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }

    export function getUserByName(name: string): UserInfo | null {
        const list = getUserList();
        const user = list.find(u => u.name === name);
        return user ?? null;
    }

    export function getCurrentUser(): UserInfo | null {
        const str = localStorage.getItem(CURRENT_USER_KEY);
        if (!str) return null;
        try {
            return JSON.parse(str) as UserInfo;
        } catch {
            return null;
        }
    }


}