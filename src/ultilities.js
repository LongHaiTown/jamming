import Song from "./Song";


function dataToSong(props, handleDelete, handleSubmit) {
    const songArray = [];
    if (handleDelete != null) {
        for (let i = 0; i < props.length; i++) {
            songArray.push(<Song artistName={props[i].artist} songName={props[i].song} handler={handleDelete} />)
        }
    }
    if (handleSubmit != null) {
        for (let i = 0; i < props.length; i++) {
            songArray.push(<Song artistName={props[i].artist} songName={props[i].song} handler={handleSubmit} />)
        }
    }
    return songArray;
}

export default dataToSong;