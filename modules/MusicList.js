import React from 'react';
import { Paper } from '@mui/material';
import ListSong from '../components/ListSong';

const MusicList = ({ listOfSongs, setCurrentSong, currentSong }) => {
  return (
    <Paper
      elevated={0}
      sx={{
        width: '30%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        scrollBarWidth: 'none',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      }}
    >
      {listOfSongs.map((song) => {
        return <ListSong song={song} setCurrentSong={setCurrentSong} currentSong={currentSong} />;
      })}
    </Paper>
  );
};

export default MusicList;
