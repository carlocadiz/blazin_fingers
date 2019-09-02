import React from 'react';


class CountDown extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        timer: props.initialTime
    }
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.timer === 0){
      clearInterval(this.interval);
      this.props.onTimerElapsed()
    }
  }

  componentWillUnmount(){
   clearInterval(this.interval);
   this.props.onTimerElapsed()
  }

  render() {
    return (
      <div style={{backgroundColor:'white'}} className= "ml4 br3 ba b--black-10 mv4 w-25 mw6 shadow-5 left tc">
        <h1> Time remaining ... {this.state.timer} </h1>
      </div>
    )
  }
}




export default CountDown;
