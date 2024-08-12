
import Song from "./Song";
import { musicLibrary } from "./SongList";
import dataToSong from "./ultilities";

function ResultPanel({ handleSubmit, props }) {
    if (props != null) {
        const handleDelete = null;
        const songArray = dataToSong(musicLibrary, handleDelete, handleSubmit);
        const testName = props[0].name;
        const testAName = props[0].album.artists[0].name;

        const testName0 = props[1].name;
        const testAName0 = props[1].album.artists[0].name;

        const testName1 = props[2].name;
        const testAName1 = props[2].album.artists[0].name;

        const testName2 = props[3].name;
        const testAName2 = props[3].album.artists[0].name;

        const testName3 = props[4].name;
        const testAName3 = props[4].album.artists[0].name;
        return (
            <div className="results">
                <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>Results</h1>
                <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
                <Song songName={testName} artistName={testAName} handler={handleDelete} />
                <Song songName={testName0} artistName={testAName0} handler={handleDelete} />
                <Song songName={testName1} artistName={testAName1} handler={handleDelete} />
                <Song songName={testName2} artistName={testAName2} handler={handleDelete} />
                <Song songName={testName3} artistName={testAName3} handler={handleDelete} />
            </div>
        )
    }
    else return (
        <div className="results">
            <h1 style={{ marginLeft: "20px", alignSelf: "flex-start" }}>Results</h1>
            <hr style={{ width: "100%", padding: "0%", margin: "0%" }} />
            {/* <Song songName={testName} artistName={testAnem} handler={handleDelete} /> */}
        </div>
    )
}

export default ResultPanel;