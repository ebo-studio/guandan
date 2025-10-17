export module SignInManager {
    var STORAGE_KEY = "lastSignDate";
    const AD_COUNT_KEY = "adWatchData"; // ✅ 存储广告观看次数

    /**
     * 获取今天日期字符串，格式：yyyy-mm-dd
     */
    export function getTodayDateStr(): string {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    /**
     * 是否已经签到（今日）
     */
    export function isTodaySigned(): boolean {
        const lastSign = localStorage.getItem(this.STORAGE_KEY);
        return lastSign === this.getTodayDateStr();
    }

    /**
     * 签到（保存今日签到记录）
     */
    export function signToday(): void {
        localStorage.setItem(this.STORAGE_KEY, this.getTodayDateStr());
    }

    /**
     * 清除签到记录（调试用）
     */
    export function resetSign(): void {
        localStorage.removeItem(this.STORAGE_KEY);
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
     * 获取今天的广告观看数据
     */
    function getAdWatchData(): AdWatchData {
        const dataStr = localStorage.getItem(AD_COUNT_KEY);
        const today = getTodayDateStr();

        if (dataStr) {
            try {
                const data: AdWatchData = JSON.parse(dataStr);
                if (data.date === today) {
                    return data;
                }
            } catch (e) {
                console.warn("广告数据解析错误，已重置:", e);
            }
        }

        // ✅ 日期不同或数据错误 → 自动重置
        const newData = { date: today, count: 0 };
        localStorage.setItem(AD_COUNT_KEY, JSON.stringify(newData));
        return newData;
    }

    /**
     * 增加一次观看次数
     * @returns 是否还能观看（false 表示达到上限）
     */
    export function addAdWatch() {
        const data = getAdWatchData();
        if (data.count < MAX_DAILY_ADS) {
            data.count++;
            localStorage.setItem(AD_COUNT_KEY, JSON.stringify(data));
            // console.log(`🎁 广告奖励计入成功 (${data.count}/${MAX_DAILY_ADS})`);
        } else {
            // console.log("⚠️ 今日广告观看已达上限");
        }
    }

    /**
 * ✅ 判断今天还能不能看广告（不修改次数）
 */
    export function canWatchAd(): boolean {
        const data = getAdWatchData();
        return data.count < MAX_DAILY_ADS;
    }

    export function getWatchedCount(): number {
        const data = getAdWatchData();
        return data.count;
    }

    /**
     * 获取剩余可观看次数
     */
    export function getRemainingAds(): number {
        const data = getAdWatchData();
        return Math.max(0, MAX_DAILY_ADS - data.count);
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
}