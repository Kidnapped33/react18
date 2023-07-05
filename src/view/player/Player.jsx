import { useState } from "react";
import "./player.css";

function Player() {
  return (
    <>
      Game
      <br />
      <br />
      <br />
      <div style={{ paddingLeft: 30 }}>
        <Board />
      </div>
    </>
  );
}

export default Player;

function Square() {
  // const [value, setValue] = useState(null);
  // const handleClick = () => {
  //   console.log('click333');
  //   setValue('O')
  // }
  return (
    <>
      <button className="square"></button>
    </>
  );
}

function Board() {

  // squares =  [null, null, null, null, null, null, null, null, null]
  const [ squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <div className="board-row">
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
        <Square value={squares[3]}/>
      </div>
      <div className="board-row">
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
        <Square value={squares[6]}/>
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
