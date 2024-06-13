import './App.css'
import { useState } from 'react'
import {BoardType, WinCondition, checkWinCondition} from './games'

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick} > {value} </button> 
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

  const winState = checkWinCondition({board: squares})
  const winner = winState.winner
  let status; 
  if (winner) {
    status = winner + " wins!"
  } else {
    //i should update this to be more clear probably 
    status = "Next player: " + (nextPlayer ? "X" : "O")
  }
  

  return (
    <> 
    <div className="page">
      <div className="game">
      <h1> Tink Tank Toe</h1>
      <div className="status"> {status} </div>
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
    </div>
    </>
  )
}