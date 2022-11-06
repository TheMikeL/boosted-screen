import React from 'react';
import { Typography } from '@mui/material';

const ListSong = ({ song, setSongInfo, currentSong }) => {
  const { image, title, artist, year } = song;
  return (
    <button
      onClick={() => setSongInfo(song)}
      className='flex justify-center items-center p-2 hover:shadow-xl transition-all lg:px-6'
    >
      <div className='flex w-full flex-row justify-between text-center'>
        <div className='flex justify-center'>
          {image ? (
            <img src={song.image} alt='musicImage' />
          ) : (
            // TODO: I would not use a public link in real code, likely cdn/db/cache returned image
            <img
              src={
                'https://youngservice.net/wp-content/uploads/2020/03/unnamed-4-removebg-preview.png'
              }
              alt='missingImage'
              width='50'
            />
          )}
        </div>
        <div className='w-40 text-right whitespace-nowrap overflow-hidden overflow-ellipsis md:w-64 lg:w-72'>
          {/* TODO: I would prefer to use a song id for showing song selection: */}
          {(
            <Typography
              variant='subtitle1'
              color={currentSong?.title === title ? 'primary' : ''}
            >
              {title}
            </Typography>
          )}
          <Typography variant='body2'>{artist}</Typography>
          <Typography variant='body2'>{year && year}</Typography>
        </div>
      </div>
    </button>
  );
};

export default ListSong;
