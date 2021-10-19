import "./App.css";
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from "react";
import MusicApp from "./views/MusicApp";
import Login from "./views/Login";

function App() {

  const [response, setResponse] = useState();
  const [username, setUsername] = useState("")

  useEffect(() => {



    // 初始化 Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_APP_VERSION
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
  }, []);


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


  const isAtLoginPage = useRouteMatch('/login');

  //第一次 response 預設為undefined，待FB SDK 初始化完成。
  if (!response) {

    return <></>
  }

  if (response.status !== 'connected' && !isAtLoginPage) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          {response.status === 'connected' ? <Redirect to="/musicApp" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/musicApp">
          <MusicApp handleFBLogout={handleFBLogout} username={username} handleFetchUser={handleFetchUser} />
        </Route>
        <Route path="/login">
          <Login handleFBLogin={handleFBLogin} status={response.status} />
        </Route>
        <Route path="*">
          <h1>404 Not Found.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
