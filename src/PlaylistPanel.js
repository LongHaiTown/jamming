import Song from "./Song";
import { useState } from "react"
import dataToSong from "./ultilities";

function PlaylistPanel({ songList }) {
    const [favorite, setFavorite] = useState([

        { artist: "The Weeknd", song: "Die for you" },
        { artist: "Taylor Swift", song: "Love Story" }

    ])



    const handleDelete = (songToRemove) => {
        setFavorite((prev) => prev.filter(
            (favorite) => favorite.song !== songToRemove
        ));
    };

    const songArray = dataToSong(favorite);

    return (
        <div className="playlist">
            <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>My playlist</h1>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            {songArray}
        </div>
    )
}

export default PlaylistPanel;