import { utils } from "../common/utils";
import { GlobalData } from "./GlobalData";
import { UrlConfig } from "./UrlConfig";

export module SignInManager {
    const STORAGE_KEY = "lastSignDate";
    const AD_COUNT_KEY = "adWatchData"; // ✅ 存储广告观看次数
    const USERS_KEY = "userList";
    const CURRENT_USER_KEY = "currentUser";

    export interface UserInfo {
        token: string;
        name: string;
        ad_watch_count: number;
        lastSignDate?: string; // ✅ 最后签到日期（yyyy-mm-dd）
    }

    // ============================================================
    // ✅ 通用函数
    // ============================================================

    /** 获取今天日期字符串：yyyy-mm-dd */
    export function getTodayDateStr(): string {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    // ============================================================
    // ✅ 用户管理逻辑
    // ============================================================

    /** 获取本地所有用户 */
    export function getUserList(): UserInfo[] {
        const dataStr = localStorage.getItem(USERS_KEY);
        if (!dataStr) return [];
        try {
            const list = JSON.parse(dataStr);
            return Array.isArray(list) ? list : [];
        } catch {
            return [];
        }
    }

    /** 保存用户列表 */
    function saveUserList(list: UserInfo[]): void {
        localStorage.setItem(USERS_KEY, JSON.stringify(list));
    }

    /** 获取当前用户 */
    export function getCurrentUser(): UserInfo | null {
        const str = localStorage.getItem(CURRENT_USER_KEY);
        if (!str) return null;
        try {
            return JSON.parse(str) as UserInfo;
        } catch {
            return null;
        }
    }

    /** 设置当前用户 */
    function setCurrentUser(user: UserInfo): void {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }

    /** 添加或更新用户（自动更新 currentUser） */
    export function addOrUpdateUser(user: UserInfo): void {
        const list = getUserList();
        const idx = list.findIndex(u => u.name === user.name);
        if (idx >= 0) list[idx] = user;
        else list.push(user);
        saveUserList(list);
        setCurrentUser(user);
        console.log(`👤 已更新用户：${user.name}`);
    }

    /** 根据名字切换当前用户 */
    export function switchUser(name: string): boolean {
        const list = getUserList();
        const user = list.find(u => u.name === name);
        if (!user) {
            console.warn(`❌ 未找到用户：${name}`);
            return false;
        }
        setCurrentUser(user);
        console.log(`🔄 已切换到用户：${name}`);
        return true;
    }

    /** 根据用户名获取用户信息 */
    export function getUserByName(name: string): UserInfo | null {
        const list = getUserList();
        return list.find(u => u.name === name) ?? null;
    }

    /** 获取用户数量 */
    export function getUserCount(): number {
        return getUserList().length;
    }

    /** 删除指定用户 */
    export function removeUser(name: string): void {
        const list = getUserList().filter(u => u.name !== name);
        saveUserList(list);
        const cur = getCurrentUser();
        if (cur && cur.name === name) {
            localStorage.removeItem(CURRENT_USER_KEY);
            console.log(`🗑️ 已删除当前用户：${name}`);
        } else {
            console.log(`🗑️ 已删除用户：${name}`);
        }
    }

    /** 重置所有用户数据（包括当前用户） */
    export function resetUserList(): void {
        localStorage.removeItem(USERS_KEY);
        localStorage.removeItem(CURRENT_USER_KEY);
        // localStorage.removeItem(AD_COUNT_KEY);
        // localStorage.removeItem(STORAGE_KEY);
        console.log("🧹 所有用户数据已清空！");
    }

    // ============================================================
    // ✅ 签到功能
    // ============================================================

    /** 是否今日已签到 */
    export function isTodaySigned(): boolean {
        const user = getCurrentUser();
        if (!user) return false;
        return user.lastSignDate === getTodayDateStr();
    }

    /** 今日签到 */
    export function signToday(): void {
        const user = getCurrentUser();
        if (!user) return;
        user.lastSignDate = getTodayDateStr();
        updateUser(user);
        console.log(`✅ 用户 ${user.name} 今日签到成功！`);
    }

    /** 重置当前用户签到状态 */
    export function resetSign(): void {
        const user = getCurrentUser();
        if (!user) return;
        user.lastSignDate = "";
        updateUser(user);
        console.log(`🔄 用户 ${user.name} 签到状态已重置`);
    }

    /** 更新用户信息（内部用） */
    function updateUser(user: UserInfo): void {
        const list = getUserList();
        const idx = list.findIndex(u => u.token === user.token);
        if (idx >= 0) list[idx] = user;
        saveUserList(list);

        const current = getCurrentUser();
        if (current && current.token === user.token) {
            setCurrentUser(user);
        }
    }

    // ============================================================
    // ✅ 每日广告观看次数逻辑
    // ============================================================

    export function resetAdWatch(): void {
        localStorage.setItem(
            AD_COUNT_KEY,
            JSON.stringify({ date: getTodayDateStr(), count: 0 })
        );
    }

    export async function getRemainingAds(onSuccess?: (data: any) => void) {
        const url = `${UrlConfig.getHttpUrl()}api/User/queryAdWatchInfo`;
        SignInManager.postWithFetch(url, { token: GlobalData.loginInfo.token })
            .then(data => {
                if (Number(data?.code) === 200) {
                    GlobalData.userInfo.ad_watch_count = data.data.ad_watch_count;
                    console.log('今日已观看:', data.data.ad_watch_count);
                    onSuccess?.(data);
                } else {
                    console.error('接口非200：', data);
                }
            })
            .catch(err => console.error(err));
    }

    export function addAdWatch(onSuccess?: (data: any) => void) {
        const url = `${UrlConfig.getHttpUrl()}api/User/incrementAdWatchCount`;
        SignInManager.postWithFetch(url, { token: GlobalData.loginInfo.token })
            .then(data => {
                if (Number(data?.code) === 200) {
                    GlobalData.userInfo.score = data.data.gold;
                    onSuccess?.(data);
                    utils.send(GlobalData.localEvent.UpdateScore);
                } else {
                    console.error('接口非200：', data);
                }
            })
            .catch(err => console.error(err));
    }

    // ============================================================
    // ✅ 网络请求封装
    // ============================================================

    export async function postWithFetch(url: string, data?: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ token: GlobalData.loginInfo.token, ...data }),
            });

            const text = await response.text();
            console.log("status:", response.status, "body:", text.slice(0, 200));

            if (/<!doctype|<html/i.test(text))
                throw new Error("收到 HTML（登录/错误页）");

            return JSON.parse(text.replace(/^\uFEFF/, ""));
        } catch (err) {
            console.error("postWithFetch error:", err);
            throw err;
        }
    }
}
