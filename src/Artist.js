function Artist() {
    return (
        <div className="artist">
            <img src="./JammingBg.png" style={{ maxWidth: "45%" }} />
            <div className="artistInfo">
                <h1 style={{ color: "white", fontSize: "20px", marginTop: "0px", marginBottom: "2px" }}>Son Tung MTP</h1>
                <ul>
                    <p style={{ margin: "0px 0px 2px 0px" }}>Genres</p>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div >
    )
}

export default Artist;