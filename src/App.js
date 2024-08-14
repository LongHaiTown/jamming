
import './App.css';
import ResultPanel from './ResultPanel';
import PlaylistPanel from './PlaylistPanel';
import ArtistResult from './ArtistResult';
import { useState, useEffect } from 'react';


const CLIENT_ID = "7f78b5d7070d4cf0a6706a23ea304335";
const CLIENT_SECRET = "43bcaaed741e49b08c0f9512f2145fe7";


function App() {
  const [accessToken, setAccessToken] = useState("")
  const [searchInput, setSearchInput] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const [tracks, setTracksResult] = useState([]);

  const [favorite, setFavorite] = useState([]);




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


  /// can tách this ra 
  async function search() {
    // Get request ID
    console.log("Searching for " + searchInput)
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    try {
      // Fetch data from the Spotify API

      // Get Artist IDs
      var response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      var data = await response.json();

      setSearchResult(data.artists.items)

      // Get name- ID of 1st artist
      var artistID = data.artists.items[0].id;
      var artistname = data.artists.items[0].name;

      // Get top-tracks of 1st artist 
      response = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?market=US&limit=50', searchParameters)
      data = await response.json();
      setTracksResult(data.tracks);



    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      alert('Error fetching data. Check the console for details.');
    }
  }


  const handleAdd = (songToAdd, artistName) => {
    const song = { artist: artistName, song: songToAdd }
    setFavorite(prev => {
      const isSongAlreadyInFavorites = prev.some(favorite => favorite.song === songToAdd && favorite.artist === artistName);
      if (!isSongAlreadyInFavorites) {
        return [...prev, song];
      }

      return prev;
    })
  }
  const handleDelete = (songToRemove, artistName) => {
    setFavorite((prev) => prev.filter(
      (favorite) => (favorite.song !== songToRemove)
    ));
  };

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }


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
      <ArtistResult props={searchResult} />
      <div className="main">
        <ResultPanel handler={handleAdd} props={tracks} />
        <PlaylistPanel favorite={favorite} handler={handleDelete} setFavorite={setFavorite} />
      </div>

    </div >
  );
}
export default App;
