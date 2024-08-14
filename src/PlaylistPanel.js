import { React, useState } from "react";
import dataToSong from "./ultilities";
import SongListFavorite from "./SongListFavorite";

function PlaylistPanel({ favorite, handler, setFavorite }) {
    const [newPlaylist, setNewPlaylist] = useState({});
    const [playlistName, setPlaylistName] = useState('');

    function handleUserInput(e) {
        setPlaylistName(e.target.value);
    }

    const [allPlaylist, setAllPlaylist] = useState([]);

    const handleSubmitNewPlaylist = (event) => {
        event.preventDefault();
        if (playlistName.trim()) {
            const newPlaylist = { name: playlistName, list: favorite };
            setAllPlaylist((prev) => [newPlaylist, ...prev]);

            alert(`Added ${playlistName} to library`)
            setPlaylistName('');
            setFavorite([]);
        }
    };
    console.log(allPlaylist);
    return (
        <div className="playlist">
            <form onSubmit={handleSubmitNewPlaylist}>
                <input type="text"
                    placeholder="Playlist's name here"
                    value={playlistName}
                    onChange={handleUserInput} />
                <button type="submit"
                    style={{
                        padding: "5px",
                        width: "30%", height: "100%",
                        borderRadius: "5px",
                        backgroundColor: "#282c34",
                        color: "wheat",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}>Add to library</button>
            </form>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            <SongListFavorite songs={favorite} handler={handler} />
        </div>
    )
}

export default PlaylistPanel;