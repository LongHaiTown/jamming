

function Song({ songName, artistName, handler }) {
    return (
        <div className="result">
            <div className="Song" >
                <div className="info">
                    <h3 >{songName}</h3>
                    <p>{artistName}</p>
                </div>
                <button onClick={() => handler(songName, artistName)}>x</button>
            </div>
            <hr style={{ width: "94%", padding: "0%", margin: "0%" }} />
        </div>
    )
}

export default Song;