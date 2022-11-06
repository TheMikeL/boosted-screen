import { useState, useEffect } from 'react';
import MusicList from '../modules/MusicList';
import MusicPlayer from '../modules/MusicPlayer';

const songData = require('./songlist.json');

// TODO: Used to handle post-shuffle navigation
const getCurrentSongIndex = (currentListOfSongs, currentSong) => {
  return currentListOfSongs.findIndex((song) => {
    return song.title === currentSong.title;
  });
};

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listOfSongs, setListOfSongs] = useState([]);

  const songDataArray = songData.songs;

  // TODO: Lazy Loading - instead of loading all of the data into state
  // A possible optimization could be Lazy Loading the list
  useEffect(() => {
    setListOfSongs(songDataArray);
  }, []);

  // TODO: Ideally, the index is provided when generating the playlist
  // Another option would be to pre-process the array
  // Would recommend this happen server side, if possible.
  const setCurrentSongInfo = (song) => {
    setCurrentSong(song);
    setCurrentIndex(song.index);
  };

  const goToNextSong = () => {
    const nextIndex = currentIndex + 1;

    setCurrentIndex(nextIndex);
    setCurrentSong(listOfSongs[nextIndex]);
  };

  const goToPreviousSong = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);

    if (currentIndex < 0) {
      setCurrentIndex(0);
    }

    setCurrentSong(listOfSongs[prevIndex]);
  };

  const shuffleSongs = () => {
    const randomizedSongs = [...songDataArray];
    let currentIndex = randomizedSongs.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [randomizedSongs[currentIndex], randomizedSongs[randomIndex]] = [
        randomizedSongs[randomIndex],
        randomizedSongs[currentIndex],
      ];
    }
    setListOfSongs(randomizedSongs);
    setCurrentIndex(getCurrentSongIndex(randomizedSongs, currentSong));
  };

  const returnOriginalSongOrder = () => {
    setListOfSongs(songDataArray);
    setCurrentIndex(getCurrentSongIndex(songDataArray, currentSong));
  };

  return (
    <div className='w-full flex flex-row justify-center items-center bg-zinc-800 h-screen'>
      <MusicList
        listOfSongs={listOfSongs}
        setSongInfo={setCurrentSongInfo}
        currentSong={currentSong}
      />
      <MusicPlayer
        currentSong={currentSong}
        goToNextSong={goToNextSong}
        goToPreviousSong={goToPreviousSong}
        shuffleSongs={shuffleSongs}
        returnOriginalSongOrder={returnOriginalSongOrder}
      />
    </div>
  );
}
