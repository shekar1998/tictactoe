import React, { Component } from 'react';
import '../index.css';

const Player = (props) => {
  return (
    <div className='input-box'>
      <label>Player 1</label>
      <input id='player1'></input>
      <label>Player 2</label>
      <input id='player2'></input>

      <button
        onClick={() =>{
            props.onSubmit(
            document.getElementById('player1').value,
            (document.getElementById('player2').value
            ))}}>Save</button>
    </div>
  );
};

export default Player;
