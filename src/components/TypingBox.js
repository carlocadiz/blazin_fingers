import React from 'react';

const TypingBox = ({currentWord, loadWord, pointsTotal}) => {

const onTextChange = (event) => {
  if((event.target.value).toLowerCase() === currentWord ){

    pointsTotal((event.target.value).length)
    event.target.value='';
    loadWord();
  }
}
  return (
    <div>
    <input className="pa2 w-30"
           type="text"
           onChange={(event) => onTextChange(event)}
           autoFocus
           />
    </div>
  )
}

export default TypingBox;
