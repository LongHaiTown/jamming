import Song from "./Song";


function dataToSong(props) {
    const songArray = []

    for (let i = 0; i < props.length; i++) {
        songArray.push(<Song artistName={props[i].artist} songName={props[i].song} />)
    }
    return songArray;
}

export default dataToSong;