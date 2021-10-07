import './App.css';
import Header from './components/Header';
import Genre from './components/Genre';
import Musics from './components/Musics';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch)

function App() {

  const dummyData = [{
    id: uuidv4(),
    name: "你好",
    description: "text",
    isShown: true,
    type: "pop"
  }, {
    id: uuidv4(),
    name: "不好",
    description: "text",
    isShown: false,
    genre: "pop"
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: false,
    genre: "pop"
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true,
    genre: "pop"
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true,
    genre: "pop"
  }, {
    id: uuidv4(),
    name: "123",
    description: "text",
    isShown: true,
    genre: "pop"
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
      <Genre />
      <Musics albums={albums} />
    </div>
  );


}

export default App;
