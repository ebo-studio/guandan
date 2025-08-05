import { error } from "cc";

export default class Http {

    public static async post<T = any>(
        url: string,
        data: Record<string, any> = {},
        json: boolean = true
    ): Promise<T> {
        try {
            const headers: Record<string, string> = {};
            let body: string;

            if(json) {
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(data);
            } else {
                headers['Content-Type'] = 'application/json';
                body = Object.entries(data)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&');
            }

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body
            });

            if(!response.ok) {
                throw new Error(`HTTP错误: ${response.status}`);
            }

            const text = await response.text();

            try {
                return JSON.parse(text) as T;
            } catch {
                return text as unknown as T;
            }
        } catch (err) {
            console.error('POST 请求失败:', err);
            throw err;
        }
    }

}