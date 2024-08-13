
import dataToSong from "./ultilities";
import SongListFavorite from "./SongListFavorite";

function PlaylistPanel({ favorite, handler }) {
    return (
        <div className="playlist">
            <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>My playlist</h1>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            <SongListFavorite songs={favorite} handler={handler} />
        </div>
    )
}

export default PlaylistPanel;