
import './App.css';
import ResultPanel from './ResultPanel';
import PlaylistPanel from './PlaylistPanel';
import { useState } from 'react';
function App() {


  const [favorite, setFavorite] = useState([

    { artist: "The Weeknd", song: "Die for you" },
    { artist: "Taylor Swift", song: "Love Story" }

  ])

  const handleAdd = (songToAdd, artistName) => {
    const song = { artist: artistName, song: songToAdd }
    setFavorite(prev => [...prev, song])
  }
  const handleDelete = (songToRemove, artistName) => {
    setFavorite((prev) => prev.filter(
      (favorite) => (favorite.song !== songToRemove) && (favorite.artist !== artistName)
    ));
  };


  return (
    <div className="App">
      <div className="title">
        <h1 style={{ margin: "0%" }}>Let's Jamming</h1>
      </div>

      <div className="Search">
        <form>
          <input type="text"></input>
          <button id="submitButton">Submit</button>
        </form>
      </div>

      <div className="main">
        <ResultPanel handleSubmit={handleAdd} />
        <PlaylistPanel favorite={favorite} handleDelete={handleDelete} />


      </div>
    </div >
  );
}

export default App;
