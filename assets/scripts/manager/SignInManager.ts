export module SignInManager {
    var STORAGE_KEY = "lastSignDate";

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
}