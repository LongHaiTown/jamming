import Artist from "./Artist";

function ArtistResult({ props }) {
    const artistSearch1 = props[0];
    const artistSearch2 = props[1];

    return (
        <div className="artistResults">
            <Artist artist={artistSearch1} />
            <Artist artist={artistSearch2} />
        </div>
    )

}

export default ArtistResult;