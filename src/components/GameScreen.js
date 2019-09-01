import React from 'react';
import CurrentWord from './CurrentWord';
import TypingBox from './TypingBox';

import CountDown from './CountDown';

const GameScreen = ({currentWord, loadWord}) => {
    return (
      <div className='tc'>
      <CurrentWord currentWord={currentWord}/>
      <CountDown initialTime={10}/>
      <TypingBox
         currentWord={currentWord}
         loadWord={loadWord}/>
      </div>
    );
}

export default GameScreen;
