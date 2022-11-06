import React from 'react';
import { Paper } from '@mui/material';
import ListSong from '../components/ListSong';

const MusicList = ({ listOfSongs, setSongInfo, currentSong }) => {
  return (
    <Paper
      elevated={0}
      sx={{
        width: '35%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        scrollBarWidth: 'none',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      }}
    >
      {listOfSongs.map((song, index) => {
        return (
          <ListSong
            song={{...song, index}}
            setSongInfo={setSongInfo}
            currentSong={currentSong}
          />
        );
      })}
    </Paper>
  );
};

export default MusicList;
