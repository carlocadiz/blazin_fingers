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
    if(this.state.timer === 1){
      console.log("-------------------timer count down is leaking")
      clearInterval(this.interval);
      //this.props.onTimerElapsed()
    }
  }

  componentWillUnmount(){
   clearInterval(this.interval);
   this.props.onTimerElapsed()
  }

  render() {
    return (
        <p style={this.props.style}> {this.state.timer} </p>
    )
  }
}




export default CountDown;
