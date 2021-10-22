import "./App.css";
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import MusicApp from "./views/MusicApp";
import Login from "./views/Login";
import useFacebookLogin from './hooks/useFacebookLogin';

function App() {

  const [response, username, handleFetchUser, handleFBLogin, handleFBLogout] = useFacebookLogin({
    appId: process.env.REACT_APP_FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: process.env.REACT_APP_FB_APP_VERSION,
  });

  const isAtLoginPage = useRouteMatch('/login');

  if (response?.status !== 'connected' && !isAtLoginPage) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          {response?.status === 'connected' ? <Redirect to="/musicApp" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/musicApp">
          <MusicApp handleFBLogout={handleFBLogout} username={username} handleFetchUser={handleFetchUser} />
        </Route>
        <Route path="/login">
          <Login handleFBLogin={handleFBLogin} status={response?.status} />
        </Route>
        <Route path="*">
          <h1>404 Not Found.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
