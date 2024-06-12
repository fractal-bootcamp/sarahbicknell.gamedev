import './App.css'

const game = {
  board: [null, null, null, null, null, null, null, null, null]
}

function checkForWin(game) {

    //array of possible win configurations
    const possibleWinPositions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 9], [0, 3, 6], [1, 4, 7,], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    // checks whether a given position is a winner and returns a boolean to represent this 
    function isWinningPosition {

      //.every 
      return null
    }

  

    //using .find to call the isWinning function to return the first possible position that is a win 
    const winningPosition = possibleWinPositions.find(winPosition => {
      const isWin = winPosition.every(index => {

      })
    })

    // if there is a winning position, check 
    if (winningPosition) {
      return [outcome: 'win', winner: game.board[winningPosition[0]]
    }
}

function App() {

  return (
    <>
    <div> 
      <h1> TEEK TAK TOE</h1>
    </div>
    </>
  )
}

export default App
