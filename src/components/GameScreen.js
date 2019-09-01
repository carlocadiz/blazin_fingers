import React from 'react';
import CurrentWord from './CurrentWord';
import TypingBox from './TypingBox';
import TotalPoints from './TotalPoints';



const GameScreen = ({currentWord, loadWord, pointsTotal, totalPoints, totalWords}) => {
    return (
      <div className='tc'>
        <CurrentWord currentWord={currentWord}/>

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
