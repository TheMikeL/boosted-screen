import { useState } from 'react';
import Song from '../components/PlayerSong';
import MusicList from '../modules/MusicList';
import MusicPlayer from '../modules/MusicPlayer';

const songData = require('./songlist.json');

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomizedSongs, setRandomizedSongs] = useState([]);

  const listOfSongs = songData.songs;

  // TODO: Ideally, the index is provided when generating the playlist
  // Another option would be to pre-process the array
  // Would recommend this happen server side, if possible.
  const setSongInfo = (song) => {
    setCurrentSong(song);
    setCurrentIndex(song.index);
  };

  const goToNextSong = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentSong(listOfSongs[currentIndex]);
  };

  const goToPreviousSong = () => {
    setCurrentIndex(currentIndex);
    if (currentIndex < 0) {
      setCurrentIndex(0);
    }
    setCurrentSong(listOfSongs[currentIndex]);
  };

  return (
    <div className='w-full flex flex-row justify-center items-center bg-zinc-800 h-screen'>
      <MusicList
        listOfSongs={randomizedSongs.length > 0 ? randomizedSongs : listOfSongs}
        setSongInfo={setSongInfo}
        currentSong={currentSong}
      />
      <MusicPlayer
        currentSong={currentSong}
        goToNextSong={goToNextSong}
        goToPreviousSong={goToPreviousSong}
      />
    </div>
  );
}
