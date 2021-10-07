import './App.css';
import Header from './components/Header';
import Musics from'./components/Musics'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
function App() {

  const dummyData = [{
    id: uuidv4(),
    name: "123",
    description: "text"
}, {
    id: uuidv4(),
    name: "123",
    description: "text"
}, {
    id: uuidv4(),
    name: "123",
    description: "text"
}, {
    id: uuidv4(),
    name: "123",
    description: "text"
}, {
    id: uuidv4(),
    name: "123",
    description: "text"
}, {
    id: uuidv4(),
    name: "123",
    description: "text"
}
]
const [albums, setAlbums] = useState(dummyData);

  return (
    <div className="App">
      <Header />
      <Musics albums={albums}/>
    </div>
  );




}

export default App;
