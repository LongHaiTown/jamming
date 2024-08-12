function Artist({ artist }) {
    if (artist != null)
        return (
            <div className="artist">
                <img src={artist.images && artist.images.length > 0 ? artist.images[0].url : './logo192.png'} style={{ maxWidth: "45%" }} />
                <div className="artistInfo">
                    <h1 style={{ color: "white", fontSize: "20px", marginTop: "0px", marginBottom: "2px" }}>{artist.name}</h1>
                    <ul>
                        <p >Genres:</p>
                        <li>{artist.genres[0]}</li>
                        <li>{artist.genres[1]}</li>
                        <li>{artist.genres[2]}</li>
                    </ul>
                </div>
            </div >
        )
    else
        return (
            <div className="artist">
            </div >
        );
}

export default Artist;