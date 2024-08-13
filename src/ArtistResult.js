import Artist from "./Artist";

function ArtistResult({ props }) {

    const limitedItems = props.slice(0, 8);

    return (
        <div className="artistResults">
            {limitedItems.map(item => (
                <Artist artist={item} />
            ))}
        </div>
    )

}

export default ArtistResult;