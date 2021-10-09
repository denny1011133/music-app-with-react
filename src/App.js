import "./App.css";
import Genre from "./components/Genre";
import Musics from "./components/Musics";
import SideBar from "./components/SideBar";
import MyFavorites from "./components/MyFavorites";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

function App() {
  const dummyAlbums = [
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
    {
      id: uuidv4(),
      name: "夜光信號",
      artist: "步行者",
      description:
        "「 摩斯密碼隱藏著訊息，以光作為信號傳遞。短光、長光；我們被這樣黑暗中的光所吸引著。 帶著心跳及眼前閃爍的信號光芒，我們一起聚光前行。 」 經過了多年的籌備，步行者於2020年推出首張後搖滾專輯《夜光信號》，以「摩斯密碼」、「光」為主題貫穿整張專輯。摩斯密碼的聲音作為媒介，傳達與聽眾之間的對話，專輯內共有三段對話，代表著求救、以及最終獲得救贖信號的隱喻。在黑暗之中，我們會被光所吸引，儘管只是微光。藉由摩斯密碼的聲音，代替光，以此作為信號傳遞。告訴你：「在黑暗中，步行者會與你同行。」",
      isShown: true,
      isAdd: false,
      type: "country",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6e/d1/81/6ed1811d-1a8d-a03d-5f98-5834492c7e27/193017022094.jpg/500x500bb.webp",
    },
    {
      id: uuidv4(),
      name: "卡通人物",
      artist: "茄子蛋",
      description:
        "我已經用盡整個人生在表達我的感情，但你們都覺得我好笑，因為我就是一個好笑的人。於是我也跟著一起笑，這樣我就跟大家一樣了。因為你們都把我當成卡通人物。",
      isShown: true,
      isAdd: false,
      type: "rock",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/77/db/aa/77dbaac2-4c06-e6d3-d622-220f7dbc4e34/5056198914297_cover.jpg/500x500bb.webp",
    },
    {
      id: uuidv4(),
      name: "嗜愛動物",
      artist: "麋先生",
      description:
        "嗜愛 才能被愛餵養學會成長示愛 才能為愛勇敢拒絕遺憾在愛裡受傷 在愛裡求生愛上癮，是我戒不掉的癮！渴望愛也渴望被愛，誰叫我們是愛的動物關住愛再敞開來愛，從心當個示愛的動物麋先生睽違四年勇於自首《嗜愛動物》新專輯一年打掉重練一次，激盪愛的共識 從全知觀點回到凡人視角認愛",
      isShown: true,
      isAdd: true,
      type: "jazz",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b4/29/21/b4292149-5220-8da4-a397-671c003b84f0/1._1500_-_-.jpg/500x500bb.webp",
    },
  ];

  const dummyMyFavorites = [];

  const [albums, setAlbums] = useState(dummyAlbums);

  const [myFavorites, setMyFavorites] = useState(dummyMyFavorites);

  const handleSearch = function (e) {
    const inputValue = e.target.value;

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
  };

  const handleAdd = function (id) {
    const targetAlbum = albums.filter((i) => i.id === id);
    setMyFavorites((preMyFavorites) => {
      return [...preMyFavorites, ...targetAlbum];
    });
  };

  return (
    <div className="App">
      <SideBar handleSearch={handleSearch} />
      <Genre />
      <Musics albums={albums} handleAdd={handleAdd} />
      <MyFavorites myFavorites={myFavorites} />
      <Footer />
    </div>
  );
}

export default App;
