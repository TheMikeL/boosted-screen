import { useState } from 'react';
import Song from '../components/PlayerSong';
import MusicList from '../modules/MusicList';
import MusicPlayer from '../modules/MusicPlayer';

const songs = require('./songlist.json');

// songs contains an array of objects, each with a title, artist, duration in seconds. Refer to README for more details.

/*
{
    "title": "#40",
    "artist": "Dave Matthews",
    "duration": 35
}, 
*/

const listOfSongs = [
  {
    title: '#40',
    artist: 'Dave Matthews',
    duration: 35,
  },
  {
    title: 'Rocket Man',
    artist: 'Elton John',
    duration: 200,
  },
  {
    title: '#40',
    artist: 'Dave Matthews',
    duration: 35,
  },
  {
    title: 'Rocket Man',
    artist: 'Elton John',
    duration: 200,
  },
  {
    title: '#40',
    artist: 'Dave Matthews',
    duration: 35,
  },
  {
    title: 'Rocket Man',
    artist: 'Elton John',
    duration: 200,
  }
]

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <div className='w-full flex flex-row justify-center items-center bg-zinc-800 h-screen'>
      <MusicList listOfSongs={listOfSongs} setCurrentSong={setCurrentSong} currentSong={currentSong}/>
      <MusicPlayer currentSong={currentSong}/>
    </div>
  );
}
