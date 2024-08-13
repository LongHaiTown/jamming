
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

// export let musicLibrary = [
//     { artist: "The Weeknd", song: "Die for you" },
//     { artist: "Taylor Swift", song: "Love Story" },
//     { artist: "Ed Sheeran", song: "Shape of You" },
//     { artist: "Adele", song: "Hello" },
//     { artist: "The Beatles", song: "Hey Jude" },
//     { artist: "Michael Jackson", song: "Billie Jean" },
//     { artist: "Elton John", song: "Your Song" },
//     { artist: "Whitney Houston", song: "I Will Always Love You" },
//     { artist: "Queen", song: "Bohemian Rhapsody" },
//     { artist: "Coldplay", song: "Fix You" },
//     { artist: "Beyoncé", song: "Halo" },
//     { artist: "Bruno Mars", song: "Uptown Funk" },
//     { artist: "Lady Gaga", song: "Bad Romance" },
//     { artist: "Katy Perry", song: "Roar" },
//     { artist: "Ariana Grande", song: "Thank U, Next" },
//     { artist: "Justin Bieber", song: "Sorry" },
//     { artist: "The Rolling Stones", song: "Paint It Black" },
//     { artist: "Nirvana", song: "Smells Like Teen Spirit" },
//     { artist: "Madonna", song: "Like a Prayer" },
//     { artist: "Maroon 5", song: "Sugar" },
//     { artist: "Rihanna", song: "Umbrella" },
//     { artist: "Drake", song: "God's Plan" },
//     { artist: "The Weeknd", song: "Blinding Lights" },
//     { artist: "Billie Eilish", song: "Bad Guy" },
//     { artist: "Shakira", song: "Hips Don't Lie" },
//     { artist: "Eminem", song: "Lose Yourself" }
// ];