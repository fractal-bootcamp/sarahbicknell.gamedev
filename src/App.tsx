import './App.css'
import { useState } from 'react'
import {BoardType, WinCondition, checkWinCondition} from './games'
import pawImage from './assets/paw.png'
import tankImage from './assets/tank.png'


function Square({value, onSquareClick}) {
  let displayValue; 
  if (value === "X"){
    displayValue = <img src={tankImage} alt="X" className="icon" />
  } else if (value === "O") {
    displayValue = <img src={pawImage} alt="O" className="icon" />;
  }

  return (
    <button className="square" onClick={onSquareClick} > {displayValue} </button> 
  )

}

function Reset({onResetClick}) {
  return (
    <button className="reset" onClick={onResetClick} > Reset </button>
  )
}

export default function Board() {
  const [nextPlayer, setNextPlayer] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i: number) { 
    if (squares[i] || winner) {
      return
    }
    else {
      const nextSquares = squares.slice();
      if (nextPlayer) {
      nextSquares[i] = "X" ;
      } else {
      nextSquares[i] = "O";
      }
      setNextPlayer(!nextPlayer)
      setSquares(nextSquares) }
  }
  
  function resetGame() { 
    setSquares(Array(9).fill(null))
    setNextPlayer(true)
  }

  const winState = checkWinCondition({board: squares})
  const winner = winState.winner
  let winnerName;
  if (winner == "X"){
    winnerName = "Tank"
  } else if (winner == "O") {
    winnerName = "Toe"
  }
  let status; 
  if (winner) {
    status = winnerName + " wins!"
  } else if (winState.outcome == "draw") {
    status = "Git gud noobs!"
  } else {
    //i should update this to be more clear probably 
    status = (nextPlayer ? "Tank" : "Toe") + " goes next"
  }
  

  return (
    <> 
    <div className="page">
      <div className="game">
        <h1 className="title "> Pink Tank Toe !</h1>
        <div className="status"> {status} </div>
        <div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> 
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/> 
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/> 
          </div> 
          <div className="board-row"> 
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/> 
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/> 
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/> 
          </div> 
          <div className="board-row"> 
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/> 
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/> 
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/> 
            
          </div>
        </div>
          <Reset onResetClick={resetGame} /> 
      </div>
    </div>
    </>
  )
}