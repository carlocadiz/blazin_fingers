import React from 'react';
import './App.css';

import randomWords from 'random-words';
import StartGame from './components/StartGame';
import GameScreen from './components/GameScreen';
import CountDown from './components/CountDown';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord : '',
      playGame: false,
      gamerTage: '',
      totalPoints: 0,
      totalWords: -1
    }
  }

  componentDidMount() {
    this.loadWord()
  }
  loadWord = () => {
    this.setState({
      currentWord: randomWords(),
      totalWords: this.state.totalWords + 1
    })
  }

  loadGame = () => {
    this.setState({
      playGame: true
    })
  }

  pointsTotal = (data) => {
    this.setState({
      totalPoints: this.state.totalPoints + data
    });

  }

  render () {
    return (
      <div>
      {this.state.playGame ?
        <>
          <CountDown initialTime={10}/>
          <GameScreen
             currentWord={this.state.currentWord}
             loadWord={this.loadWord}
             pointsTotal={this.pointsTotal}
             totalPoints={this.state.totalPoints}
             totalWords={this.state.totalWords}/>
        </>
        : <StartGame loadGame={this.loadGame} />}
      </div>
    );
 }
}

export default App;
