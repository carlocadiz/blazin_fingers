import React from 'react';
import './App.css';

import randomWords from 'random-words';
import StarGame from './StartGame';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord : '',
      playGame: false
    }
  }

  componentDidMount() {
    this.setState({
      currentWord: randomWords()
    })
  }

  render () {


    return (
      <div>
        <StarGame />
      </div>
    );
 }
}

export default App;
