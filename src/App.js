
import './App.css';
import ResultPanel from './ResultPanel';
import PlaylistPanel from './PlaylistPanel';
import ArtistResult from './ArtistResult';
import { useState, useEffect } from 'react';


const CLIENT_ID = "7f78b5d7070d4cf0a6706a23ea304335";
const CLIENT_SECRET = "43bcaaed741e49b08c0f9512f2145fe7";
// import SongList from './SongList';
function App() {
  const [accessToken, setAccessToken] = useState("")
  const [searchInput, setSearchInput] = useState("");
  const [favorite, setFavorite] = useState([

    { artist: "The Weeknd", song: "Die for you" },
    { artist: "Taylor Swift", song: "Love Story" }

  ])


  useEffect(() => {
    const authParameter = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };
    fetch('https://accounts.spotify.com/api/token', authParameter)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])
  async function search() {
    // Get request ID
    console.log("Searching for " + searchInput)
    var artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    try {
      // Fetch data from the Spotify API
      var response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
      var data = await response.json();
      console.log(data);
      // Get all album from ID
      const artistID = data.artists.items[0].id;
      const artistname = data.artists.items[0].name;
      alert("Your \"" + searchInput + "\"" + " is " + artistname + " with " + artistID);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      alert('Error fetching data. Check the console for details.');
    }
  }
  const handleAdd = (songToAdd, artistName) => {
    const song = { artist: artistName, song: songToAdd }
    setFavorite(prev => [...prev, song])
  }
  const handleDelete = (songToRemove, artistName) => {
    setFavorite((prev) => prev.filter(
      (favorite) => (favorite.song !== songToRemove) && (favorite.artist !== artistName)
    ));
  };
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // alert(`Submitted: ${searchInput}`); // Hiển thị dữ liệu nhập vào bằng alert
    search();
  }
  //search

  return (
    <div className="App">
      <div className="title">
        <h1 style={{ margin: "0%" }}>Let's Jamming</h1>
      </div>
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleSearchInput}
            value={searchInput}
          />

          <button id="submitButton" type='submit'>Submit</button>
        </form>
      </div>
      <ArtistResult />
      <div className="main">
        <ResultPanel handleSubmit={handleAdd} />
        <PlaylistPanel favorite={favorite} handleDelete={handleDelete} />
      </div>

    </div >
  );
}
export default App;
