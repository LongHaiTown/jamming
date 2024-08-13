
import React from 'react';
import Song from './Song';

const SongListFavorite = ({ songs, handler }) => {
    return (
        <div>
            {songs.map(song => (
                <Song
                    songName={song.song}
                    artistName={song.artist}
                    handler={handler}
                />
            ))}
        </div>
    );
};

export default SongListFavorite;