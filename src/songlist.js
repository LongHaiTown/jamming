
import React from 'react';
import Song from './Song';

const SongList = ({ songs, handler }) => {
    return (
        <div>
            {songs.map(song => (
                <Song
                    key={song.id}
                    songName={song.name}
                    artistName={song.album.artists[0].name}
                    handler={handler}
                />
            ))}
        </div>
    );
};

export default SongList;
