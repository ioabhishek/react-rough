import React from 'react';
import Button from './Button';

const PauseButton = ({ movieName }) => {
  function handlePause() {
    alert(`Pused ${movieName}`);
  }

  return (
    <>
      <Button onClick={handlePause}>Paused {movieName}</Button>
    </>
  );
};

export default PauseButton;
