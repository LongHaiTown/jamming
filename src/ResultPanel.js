
import { musicLibrary } from "./songlist";
import dataToSong from "./ultilities";


function ResultPanel() {

    const songArray = dataToSong(musicLibrary);


    return (
        <div className="results">
            <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>Results</h1>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            {songArray}
        </div>
    )
}

export default ResultPanel;