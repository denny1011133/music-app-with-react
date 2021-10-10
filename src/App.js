import "./App.css";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Musics from "./components/Musics";
import MyFavorites from "./components/MyFavorites";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

library.add(fab, fas, far);

function App() {
  const [albums, setAlbums] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [myFavorites, setMyFavorites] = useState([]);

  const handleSearch = function (e) {
    if (e.key === "Enter") {
      setInputValue(e.target.value);
      setAlbums((preAlbums) => {
        return preAlbums.map((i) => {
          if (i.name.includes(inputValue)) {
            i.isShown = true;
            return i;
          } else {
            i.isShown = false;
            return i;
          }
        });
      });
    }
  };

  const handleAdd = function (id) {
    const targetAlbum = albums.filter((i) => i.id === id);
    axios
      .post("http://localhost:3002/myFavorites", ...targetAlbum)
      .then((res) => {
        setMyFavorites((preMyFavorites) => {
          return [...preMyFavorites, ...targetAlbum];
        });
      });
  };

  const handleDelete = function (id) {
    axios.delete(`http://localhost:3002/myFavorites/${id}`).then((res) => {
      setMyFavorites((preMyFavorites) =>
        preMyFavorites.filter((i) => i.id !== id)
      );
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3002/albums").then((res) => {
      setAlbums(res.data);
    });
    axios.get("http://localhost:3002/myFavorites").then((res) => {
      setMyFavorites(res.data);
    });
  }, []);

  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/albums">
          <Musics
            inputValue={inputValue}
            albums={albums}
            handleAdd={handleAdd}
            handleSearch={handleSearch}
            inputValue={inputValue}
          />
        </Route>
        <Route path="/myFavorites">
          <MyFavorites handleDelete={handleDelete} myFavorites={myFavorites} />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
