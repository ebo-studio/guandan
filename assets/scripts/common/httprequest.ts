
export class httprequest {

    public checkTimeOut;

    public timeOutTime: number = 15;

    private timeEclipsed: number = 0;

    check_timeout_id: number = null;

    public send(url: string, method?: string, data?:any) {
        console.log(`[HTTP REQ] url:${url} method:${method} data:${data}`);

            let xhr = new XMLHttpRequest();
          
            let that = this;

            this.timeEclipsed = 0;
            this.check_timeout_id = setInterval(function() {
                that.timeEclipsed += 0.1;
                if (that.timeEclipsed > that.timeOutTime) {
                    clearInterval(that.check_timeout_id);
                    xhr.abort();
                    console.log(`[HTTP RESP TIMEOUT]`);
                    if (that.onError) that.onError("请求数据失败，请重试！");
                }
                if (that.onProgress) that.onProgress(Math.floor(that.timeOutTime - that.timeEclipsed));
            }, 100);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    let response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 400) {
                        // success
                        if (that.onReply) that.onReply(response);
                    }
                    else {
                        // fail
                        if (that.onError) that.onError(response);
                    }
                    clearInterval(that.check_timeout_id);
                }
            };

            let _method = method ? method : "GET";
            xhr.open(_method, url, true);
            xhr.setRequestHeader("Content-Type","application/json");
            if (data) {
                xhr.send(data);
            }
            else {
                xhr.send();
            }
    }

    public onReply: (response: string) => void = () => {};

    public onError: (response: string) => void = () => {};

    public onProgress: (timeLeft: number) => void = () => {};
}
