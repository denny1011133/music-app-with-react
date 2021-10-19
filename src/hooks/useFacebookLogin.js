import { useState, useEffect } from 'react';

const useFacebookLogin = ({ appId, cookie, xfbml, version }) => {

    const [response, setResponse] = useState();
    const [username, setUsername] = useState("")

    // 載入 Facebook SDK 並完成 init 的動作
    useEffect(() => {
        // SDK 載入完成時會立即呼叫 fbAsyncInit
        window.fbAsyncInit = function () {
            // 初始化 Facebook SDK
            window.FB.init({
                appId,
                cookie,
                xfbml,
                version,
            });



            // 取得使用者目前登入狀態
            window.FB.getLoginStatus(function (response) {
                setResponse(response);

                if (response.status === "connected") {
                    handleFetchUser()
                }

            });
            window.FB.AppEvents.logPageView();
        };

        // 載入 Facebook SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, [appId, cookie, xfbml, version]);


    // 使用者登入
    const handleFBLogin = () => {
        window.FB.login(
            function (response) {
                setResponse(response);
                handleFetchUser()
            },
        )

    };

    // 使用者登出
    const handleFBLogout = () => {

        window.FB.logout(function (response) {
            setResponse(response);
        });
    };

    //取得使用者資料
    const handleFetchUser = () => {
        window.FB.api('/me', function (response) {
            setUsername(response.name)
        });
    }

    return [response, username, handleFetchUser, handleFBLogin, handleFBLogout];
};

export default useFacebookLogin;