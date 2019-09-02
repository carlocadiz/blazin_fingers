import React from 'react';
import './App.css';

import randomWords from 'random-words';
import StartGame from './components/StartGame';
import GameScreen from './components/GameScreen';
import CountDown from './components/CountDown';
import NewGameModal from './components/NewGameModal';

const randomTag = () => {
  return 'guest'+ Math.floor((Math.random()*400) + 1);

}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord : '',
      playGame: false,
      gamerTag: randomTag(),
      totalPoints: 0,
      totalWords: -1,
      liveGame: true
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

  onTimerElapsed = () => {
    this.setState({
      liveGame: false,
      currentWord: ''
    })
  }

  onTagChange = (event) => {
     this.setState({
       gamerTag: event.target.value})
  }



  render () {
    return (
      <div>
      {this.state.playGame ?

        (this.state.liveGame ?
          <>
            <CountDown initialTime={10} onTimerElapsed={this.onTimerElapsed}/>
            <GameScreen
               gamerTag={this.state.gamerTag}
               currentWord={this.state.currentWord}
               loadWord={this.loadWord}
               pointsTotal={this.pointsTotal}
               totalPoints={this.state.totalPoints}
               totalWords={this.state.totalWords}/>
            </>
          : <NewGameModal totalPoints={this.state.totalPoints} />)

        : <StartGame loadGame={this.loadGame}
                     onTagChange={this.onTagChange}
                     gamerTag={this.state.gamerTag}/>}
      </div>
    );
 }
}

export default App;
