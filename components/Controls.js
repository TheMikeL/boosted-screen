import { useState } from 'react';
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

const Controls = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Slider
        defaultValue={0}
        size='small'
        aria-label='Seek slider'
        min={0}
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
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          <Icon color='default' component={Repeat} />
        </IconButton>
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          <Icon color='default' component={FirstPage} />
        </IconButton>{' '}
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Icon color='default' fontSize='large' component={Pause} />
          ) : (
            <Icon color='primary' fontSize='large' component={PlayArrow} />
          )}
        </IconButton>
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          <Icon color='default' component={LastPage} />
        </IconButton>
        <IconButton onClick={() => setIsShuffle(!isShuffle)}>
          <Icon color={isShuffle ? 'primary' : 'default'} component={Shuffle} />
        </IconButton>
      </div>
    </>
  );
};

export default Controls;
