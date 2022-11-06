import React from 'react';
import { Typography } from '@mui/material';

const PlayerSong = ({ currentSong }) => {
  const { image, title, artist, year } = currentSong;
  return (
    <div className='flex w-full flex-col justify-between text-center mb-3'>
      <div className='flex justify-center'>
        {image ? (
          <img src={song.image} alt='musicImage' />
        ) : (
          // TODO: Would not use a public link in real code, likely cdn/db/cache returned image
          <img
            src={
              'https://youngservice.net/wp-content/uploads/2020/03/unnamed-4-removebg-preview.png'
            }
            alt='missingImage'
            width='200'
          />
        )}
      </div>
      <div className='block text-center whitespace-nowrap overflow-hidden overflow-ellipsis'>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body1'>{artist}</Typography>
        {/* TODO: Year was missing in the JSON */}
        <Typography variant='body2'>{year && year}</Typography>
      </div>
    </div>
  );
};

export default PlayerSong;
