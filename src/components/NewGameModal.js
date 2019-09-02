import React from 'react';

const NewGameModal = ({finalTotal, onHandleQuit, onHandlePlayAgain}) => {
  return (

    <div style={{backgroundColor:'white', display:'block'}} className= "measure ml4 br3 ba b--black-10 mv4 w-50 mw6 shadow-5 left tc center">
      <h1 className="pa3">You scored a total of {finalTotal} points!</h1>
      <h2 className="pa3">Would you like play again?</h2>
      <button className="ma3  b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={onHandlePlayAgain}>YES</button>
      <button className="ma3  b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={onHandleQuit}>QUIT</button>
    </div>
  )
}

export default NewGameModal;
