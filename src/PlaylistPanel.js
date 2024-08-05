
import dataToSong from "./ultilities";

function PlaylistPanel({ favorite, handleDelete }) {


    const handleSubmit = null;

    const songArray = dataToSong(favorite, handleDelete, handleSubmit);

    return (
        <div className="playlist">
            <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>My playlist</h1>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            {songArray}
        </div>
    )
}

export default PlaylistPanel;