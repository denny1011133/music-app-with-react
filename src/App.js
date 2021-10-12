import "./App.css";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Musics from "./components/Musics";
import MyFavorites from "./components/MyFavorites";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

library.add(fab, fas, far);

function App() {

  const [inputValue, setInputValue] = useState("");
  const [albums, setAlbums] = useState([]);
  const [myFavorites, setMyFavorites] = useState([]);
  const [isloading, setIsloading] = useState(true)

  const handleSearch = function (e) {
    setInputValue(e.target.value);

    setAlbums((preAlbums) => {
      return preAlbums.map((i) => {
        if (i.name.includes(e.target.value)) {
          i.isShown = true;
          return i;
        } else {
          i.isShown = false;
          return i;
        }
      });
    });
  };

  const handleAdd = function (id) {
    const targetAlbum = albums.filter((i) => i.id === id);
    const [{ isShown, isAdd, ...data }] = targetAlbum;

    async function addToMyFavorite() {
      await axios.post("http://localhost:3002/myFavorites", data);

      setMyFavorites((preMyFavorites) => {
        return [...preMyFavorites, data];
      });

      await axios.patch(`http://localhost:3002/albums/${id}`, {
        isAdd: true,
      });

      setAlbums((preAlbums) => {
        const updateAlbums = preAlbums.map((i) => {
          if (i.id === id) {
            i.isAdd = true;
            return i;
          } else {
            return i;
          }
        });
        return updateAlbums;
      });
    }
    addToMyFavorite();
  };

  const handleDelete = function (id) {
    async function deleteFromMyFavorite() {
      await axios.delete(`http://localhost:3002/myFavorites/${id}`);

      setMyFavorites((preMyFavorites) =>
        preMyFavorites.filter((i) => i.id !== id)
      );

      await axios.patch(`http://localhost:3002/albums/${id}`, { isAdd: false });

      setAlbums((preAlbums) => {
        const updateAlbums = preAlbums.map((i) => {
          if (i.id === id) {
            i.isAdd = false;
            return i;
          } else {
            return i;
          }
        });
        return updateAlbums;
      });
    }
    deleteFromMyFavorite();
  };

  //元件渲染完後才會呼叫 useEffect 內的 function
  //元件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function
  useEffect(() => {

    Promise.all([axios.get("http://localhost:3002/albums"), axios.get("http://localhost:3002/myFavorites")])
      .then(res => {
        setAlbums(res[0].data);
        setMyFavorites(res[1].data);
        setIsloading(false)
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
            isloading={isloading}
          />
        </Route>
        <Route path="/myFavorites">
          <MyFavorites handleDelete={handleDelete} myFavorites={myFavorites} isloading={isloading} />
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
