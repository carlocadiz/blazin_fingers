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
      liveGame: true,
      finalTotal: 0
    }
  }

  // componentDidMount() {
  //   this.loadWord()
  // }

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
    this.loadWord();
  }

  pointsTotal = (data) => {
    this.setState({
      totalPoints: this.state.totalPoints + data
    });

  }

  onTimerElapsed = () => {
    this.setState({
      liveGame: false,
      currentWord: '',
      finalTotal: this.state.totalPoints,
      totalWords: -1
    })
  }

  onTagChange = (event) => {
     this.setState({
       gamerTag: event.target.value})
  }

 onHandleQuit = () => {
   this.setState({
     playGame: false,
     liveGame: true,
     gamerTag: randomTag(),
     totalPoints: 0,
     totalWords: -1
   })
 }

onHandlePlayAgain = () => {
  this.setState({
    liveGame: true,
    totalWords: -1,
    totalPoints: 0
  })
  this.loadWord();
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
          : <NewGameModal finalTotal={this.state.finalTotal}
                          onHandleQuit={this.onHandleQuit}
                          onHandlePlayAgain={this.onHandlePlayAgain}/>)

        : <StartGame loadGame={this.loadGame}
                     onTagChange={this.onTagChange}
                     gamerTag={this.state.gamerTag}/>}
      </div>
    );
 }
}

export default App;
