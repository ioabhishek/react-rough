import React from 'react';
import Button from './Button';

const PlayButton = ({ movieName }) => {
  function handlePlay() {
    alert(`Playing ${movieName}`);
  }

  return (
    <>
      <Button onClick={handlePlay}>Play {movieName}</Button>
    </>
  );
};

export default PlayButton;
