
import './App.css';
import Song from './Song';
import ResultPanel from './ResultPanel';
import PlaylistPanel from './PlaylistPanel';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };



  const musicLibrary = [
    { artist: "Taylor Swift", song: "Love Story" },
    { artist: "Ed Sheeran", song: "Shape of You" },
    { artist: "Adele", song: "Hello" },
    { artist: "The Beatles", song: "Hey Jude" }
  ];

  const songArray = []

  for (const song in musicLibrary) {
    songArray.push(<Song songName={song.song} artistName={song.artist} />)
  }

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
        <ResultPanel songList={musicLibrary} />
        <PlaylistPanel />


      </div>
    </div >
  );
}

export default App;
