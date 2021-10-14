import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';

import MusicApp from "./views/MusicApp";
import Login from "./views/Login";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/musicApp" />
        </Route>
        <Route path="/musicApp">
          <MusicApp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
