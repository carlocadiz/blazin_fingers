import React from 'react';

const TypingBox = ({currentWord, loadWord}) => {

const onTextChange = (event) => {
  if(event.target.value === currentWord ){
    event.target.value='';
    loadWord();
  }
}
  return (
    <div>
    <input className="pa2 w-50"
           type="text"
           onChange={(event) => onTextChange(event)}
           />
    </div>
  )
}

export default TypingBox;
