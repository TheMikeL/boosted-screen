import React from 'react';
import PlayerSong from '../components/PlayerSong';
import Controls from '../components/Controls';
import { Paper, Typography } from '@mui/material';

const MusicPlayer = ({
  currentSong,
  goToNextSong,
  goToPreviousSong
}) => {
  return (
    <Paper
      elevated={0}
      sx={{
        p: 5,
        width: '40%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
      }}
    >
      {currentSong ? (
        <>
          <PlayerSong currentSong={currentSong} />
          <Controls
            currentSong={currentSong}
            goToNextSong={goToNextSong}
            goToPreviousSong={goToPreviousSong}
          />
        </>
      ) : (
        <div className='text-center'>
          <Typography variant='h5'>Please select a song :)</Typography>
        </div>
      )}
    </Paper>
  );
};

export default MusicPlayer;
