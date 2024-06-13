type Cell = string
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]
type Game = {
    board: Board
}
type Player = string
type WinCondition = {
    outcome: 'win' | 'draw' | null,
    winner?: Player
}
// [0, 1]
// [2, 2]
type Position = number
// [0, 1, 2], [1, 4, 7]
type WinPosition = [Position, Position, Position]
const game = {
    board: ['', '', '', '', '', '', '', '', ''],
}

export function checkWinCondition(game: Game): WinCondition {
    // insert computer vision win detection.
    const possibleWinPositions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 9], [0, 3, 6], [1, 4, 7,], [2, 5, 8], [0, 4, 8], [2, 4, 6]
      ]
    // checks if a given position is a winning position, returns boolean
    function getWinner(winPosition: WinPosition): Player {
        // board to check the indexes in the winPositions and see if they are all the same
        // if value at first index === value at second index === value at third index
        const first = winPosition[0]
        const second = winPosition[1]
        const third = winPosition[2]
        const firstItem = game.board[first];
        const secondItem = game.board[second];
        const thirdItem = game.board[third];
        if (firstItem === secondItem && secondItem === thirdItem) {
            return firstItem as Player
        }
        return ""
    }
    // const winningPosition = possibleWinPositions.find((value) => getWinner(value))
    // FOR EACH WIN POSITION - get a winner, if there's a winner, return the winner and "WIN!"
    for (let i = 0; i < possibleWinPositions.length; i++) {
        const winner = getWinner(possibleWinPositions[i])
        if (winner !== "") {
            return { outcome: 'win', winner }
        }
    }
    // if no winner, determine if the board is full (draw)
    const areThereAnySpaces = game.board.includes("")
    const isDraw = !areThereAnySpaces;
    if (isDraw) return { outcome: 'draw' }
    // if not full and no winner, keep playing
    return { outcome: null }
}