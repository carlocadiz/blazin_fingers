import React from 'react';
import CurrentWord from './CurrentWord';
import TypingBox from './TypingBox';
import TotalPoints from './TotalPoints';



const GameScreen = ({gamerTag, currentWord, loadWord, pointsTotal, totalPoints, totalWords}) => {
    return (
      <div className='tc'>
        <CurrentWord currentWord={currentWord}
                     gamerTag={gamerTag}/>

        <TypingBox
           currentWord={currentWord}
           loadWord={loadWord}
           pointsTotal={pointsTotal}/>
        <TotalPoints totalPoints={totalPoints}
                     totalWords={totalWords}/>
      </div>
    );
}

export default GameScreen;
