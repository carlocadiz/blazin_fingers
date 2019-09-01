import React from 'react';
import CurrentWord from './CurrentWord';
import TypingBox from './TypingBox';


class GameScreen extends React.Component {
  constructor(props){
    super(props);
    }

  render () {


    return (
      <div className='tc'>
      <CurrentWord currentWord={this.props.currentWord}/>
      <TypingBox />
      </div>
    );
 }
}

export default GameScreen;
