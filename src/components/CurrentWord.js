import React from 'react';

const CurrentWord = ({currentWord, gamerTag}) => {
  return (
    <div>
      <h2>{gamerTag}, please type ...</h2>
      <h1 className="fw500">{ currentWord}</h1>
    </div>
  )
}

export default CurrentWord;
