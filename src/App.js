import './App.css';
import Header from './components/Header';
import Musics from './components/Musics'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
function App() {

  const dummyData = [{
    id: uuidv4(),
    name: "你好",
    description: "text",
    isShown: true
  }, {
    id: uuidv4(),
    name: "不好",
    description: "text",
    isShown: false
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: false
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true
  }
  ]

  const [albums, setAlbums] = useState(dummyData);


  const handleSearch = function (e) {

    const inputValue = e.target.value

    setAlbums(preAlbums => {

      return preAlbums.map(i => {
        if (i.name.includes(inputValue)) {
          i.isShown = true
          return i
        } else {
          i.isShown = false
          return i
        }

      });

    })

  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Musics albums={albums} />
    </div>
  );


}

export default App;
