
import Song from "./Song";
import SongList from "./SongList";
import dataToSong from "./ultilities";

function ResultPanel({ handler, props }) {
    if (props != null) {


        return (
            <div className="results">
                <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>Results</h1>
                <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
                <SongList songs={props} handler={handler} />
            </div>
        )
    }
    else if (props === null)
        return (
            <div className="results">
                <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>Results</h1>
                <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            </div>
        )
}

export default ResultPanel;