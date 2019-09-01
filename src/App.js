import React from 'react';
import './App.css';

import randomWords from 'random-words';
import StartGame from './components/StartGame';
import GameScreen from './components/GameScreen';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord : '',
      playGame: false,
      gamerTage: ''
    }
  }

  componentDidMount() {
    this.setState({
      currentWord: randomWords()
    })
  }

  loadGame = () => {
    this.setState({
      playGame: true
    })
  }

  render () {
    return (
      <div>
      {this.state.playGame ? <GameScreen currentWord={this.state.currentWord}/>
        : <StartGame loadGame={this.loadGame} />}
      </div>
    );
 }
}

export default App;
