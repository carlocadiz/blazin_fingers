import React from 'react';

const NewGameModal = ({totalPoints}) => {
  return (
    <div>
      <h1>You scored a total of {totalPoints} points!</h1>
      <h2>Would you like play again?</h2>
    </div>
  )
}

export default NewGameModal;
