import "./App.css";
import Genre from "./components/Genre";
import Musics from "./components/Musics";
import SideBar from "./components/SideBar";
import MyFavorites from "./components/MyFavorites";
import Footer from "./components/Footer";
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
  const dummyMyFavorites = [
    {
      id: uuidv4(),
      name: "電火王",
      artist: "美秀集團",
      description:
        "《電火王》是美秀集團的第一張專輯，集結了美秀成軍兩年來的精彩作品。開場便以一段自製樂器solo宣告電火王的降世，緊接著主打歌《電火王》則道出了本專輯最核心的maker精神，前六首歌曲皆為台語創作，透過不同面向還原我們心中對自身文化的想像，而倒數三首歌《米兒》、《小老婆》、《擋一根》更是一個完整的故事，敘述電火王在愛情的旅途中最真實的情慾，以及最深的懊悔。Bonus Track《魯之歌》則是主唱狗柏寫給吉他手修齊的生日禮物，充滿了團員間的愛與嘲諷。",
      isShown: true,
      isAdd: false,
      type: "pop",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/20/47/e6/2047e645-bbca-01b5-8b7e-3a689eaf0038/4718009707924.jpg/500x500bb.webp",
    },
    {
      id: uuidv4(),
      name: "兄弟沒夢不應該",
      artist: "拍謝少年",
      description:
        "在上山下海、提名金曲獎的生猛《海口味》之後，拍謝少年回歸日時上班領薪水，暗時熱炒唸歌詩的青年生活。少年仔炙熱的橫衝直撞，逐漸轉化成青年內斂的透徹目光；從台語搖滾繼續出發，拍謝少年精煉寫作能力，探索更多樣化的編曲可能性，在本格的豪邁音色中，加入藍調民謠、廟會唸歌、重唱和聲等元素，更以同步錄音的製作方式，保留拍謝少年現場演出生猛氣味。",
      isShown: true,
      isAdd: false,
      type: "punk",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/27/c9/ee/27c9eeb2-333a-5470-29ad-dfb2c9d9028b/887375519852.jpg/500x500bb.webp",
    },
  ];

  const [albums, setAlbums] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [myFavorites, setMyFavorites] = useState(dummyMyFavorites);

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
    setMyFavorites((preMyFavorites) => {
      return [...preMyFavorites, ...targetAlbum];
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
          <MyFavorites myFavorites={myFavorites} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
