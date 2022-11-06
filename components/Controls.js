import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Icon, IconButton, Slider, Typography } from '@mui/material';
import {
  PlayArrow,
  Pause,
  FirstPage,
  LastPage,
  Repeat,
  Shuffle,
} from '@mui/icons-material';
import { formatDuration } from '../utils';

const DurationText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.65,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const Controls = ({
  currentSong,
  shuffleSongs,
  returnOriginalSongOrder,
  goToNextSong,
  goToPreviousSong,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const [position, setPosition] = useState(0);
  const timeRef = useRef(null);

  const { duration } = currentSong;

  // Progressing timer logic for running the music
  useEffect(() => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setPosition((position) => position + 1);
      }, 1000);
    }
  }, [timeRef]);

  // Handling when the song ends
  useEffect(() => {
    if (position >= duration) {
      clearInterval(timeRef.current);
      if (isRepeatOn) {
        repeatSong();
      } else {
        goToNextSong();
      }
    }
  }, [position]);

  useEffect(() => {
    repeatSong();
  }, [currentSong]);

  useEffect(() => {
    if (isShuffleOn) {
      shuffleSongs();
    } else {
      returnOriginalSongOrder();
    }
  }, [isShuffleOn]);

  const playSong = () => {
    setIsPlaying(true);
    timeRef.current = setInterval(() => {
      setPosition((position) => position + 1);
    }, 1000);
  };

  const handlePreviousClick = (event) => {
    // Handling single and double click for previous button click
    switch (event.detail) {
      case 1: {
        repeatSong();
        break;
      }
      case 2: {
        goToPreviousSong();
        clearInterval(timeRef.current);
        break;
      }
      default: {
        break;
      }
    }
  };

  const pauseSong = () => {
    setIsPlaying(false);
    clearInterval(timeRef.current);
  };

  const repeatSong = () => {
    setPosition(0);
    clearInterval(timeRef.current);
    playSong();
  };

  return (
    <>
      <Slider
        defaultValue={0}
        size='small'
        aria-label='Seek slider'
        min={0}
        value={position}
        step={1}
        max={duration}
        onChange={(_, value) => {
          setPosition(value);
        }}
        sx={{
          color: 'rgba(0,0,0,0.87)',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:before': {
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
            },
            '&.Mui-active': {
              width: 20,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}
      />

      <div className='relative flex w-full justify-between -top-2'>
        <DurationText>{formatDuration(position)}</DurationText>
        <DurationText>-{formatDuration(duration - position)}</DurationText>
      </div>

      <div className='flex justify-center'>
        <IconButton onClick={() => setIsRepeatOn(!isRepeatOn)}>
          <Icon color={isRepeatOn ? 'primary' : 'default'} component={Repeat} />
        </IconButton>
        <IconButton onClick={handlePreviousClick}>
          <Icon color='default' component={FirstPage} />
        </IconButton>{' '}
        {isPlaying ? (
          <IconButton onClick={pauseSong}>
            <Icon color='default' fontSize='large' component={Pause} />
          </IconButton>
        ) : (
          <IconButton onClick={() => playSong()}>
            <Icon color='primary' fontSize='large' component={PlayArrow} />
          </IconButton>
        )}
        <IconButton onClick={() => goToNextSong()}>
          <Icon color='default' component={LastPage} />
        </IconButton>
        <IconButton onClick={() => setIsShuffleOn(!isShuffleOn)}>
          <Icon
            color={isShuffleOn ? 'primary' : 'default'}
            component={Shuffle}
          />
        </IconButton>
      </div>
    </>
  );
};

export default Controls;
