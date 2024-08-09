
import { useEffect, useState } from "react";

function SongList() {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrack = async () => {
            const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '4c8e1704bamshcac0f39f9f051f5p15651cjsn41331b626914',
                    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
                setTrack(result)
            } catch (error) {
                console.error(error);
            }
        };

        fetchTrack(); // Gọi hàm fetchTrack khi component được mount
    }, []);  // Mảng phụ thuộc trống để đảm bảo chỉ chạy một lần

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {track ? (
                <div>
                    <pre>{JSON.stringify(track, null, 2)}</pre>
                </div>
            ) : (
                <p>No track data available</p>
            )}
        </div>
    );
}

export default SongList;
export let musicLibrary = [
    { artist: "The Weeknd", song: "Die for you" },
    { artist: "Taylor Swift", song: "Love Story" },
    { artist: "Ed Sheeran", song: "Shape of You" },
    { artist: "Adele", song: "Hello" },
    { artist: "The Beatles", song: "Hey Jude" },
    { artist: "Michael Jackson", song: "Billie Jean" },
    { artist: "Elton John", song: "Your Song" },
    { artist: "Whitney Houston", song: "I Will Always Love You" },
    { artist: "Queen", song: "Bohemian Rhapsody" },
    { artist: "Coldplay", song: "Fix You" },
    { artist: "Beyoncé", song: "Halo" },
    { artist: "Bruno Mars", song: "Uptown Funk" },
    { artist: "Lady Gaga", song: "Bad Romance" },
    { artist: "Katy Perry", song: "Roar" },
    { artist: "Ariana Grande", song: "Thank U, Next" },
    { artist: "Justin Bieber", song: "Sorry" },
    { artist: "The Rolling Stones", song: "Paint It Black" },
    { artist: "Nirvana", song: "Smells Like Teen Spirit" },
    { artist: "Madonna", song: "Like a Prayer" },
    { artist: "Maroon 5", song: "Sugar" },
    { artist: "Rihanna", song: "Umbrella" },
    { artist: "Drake", song: "God's Plan" },
    { artist: "The Weeknd", song: "Blinding Lights" },
    { artist: "Billie Eilish", song: "Bad Guy" },
    { artist: "Shakira", song: "Hips Don't Lie" },
    { artist: "Eminem", song: "Lose Yourself" }
];