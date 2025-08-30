export module UrlConfig {
    export function getSocketUrl() {
        // return "http://localhost:8000/ws";
        return "wss://gdclient.7919.cn/ws/";
    }

    export function getHttpUrl() {
        // return "http://localhost:8000/";
        return "https://gdclient.7919.cn/";
    }

    export function getTokenUrl() {
        return 'http://16.162.115.137/';
    }

}

