let updateBoard = (section, symbol) => {
    let sectionToChange = document.getElementById(section)
    console.log(symbol)
    sectionToChange.textContent = symbol 

}

let checkIfWinner = () => {
    let winner = ""
    let board = gameBoard.board

    //check horizontal rows
    if(board[0] === board[1] && board[1] === board[2]) {
        if(board[0] === 'X') {
            winner = 'X'
        } else if(board[0] === 'O') winner = 'O'
    }
    else if(board[3] === board[4] && board[4] === board[5]) {
        if(board[3] === 'X') {
            winner = 'X'
        } else if(board[3] === 'X') winner = 'O'
    }
    else if(board[6] === board[7] && board[7] === board[8]) {
        if(board[6] === 'X') {
            winner = 'X'
        } else if(board[6] === 'X') winner = 'O'
    }

    //check vertical rows
    if(board[0] === board[3] && board[3] === board[6]) {
        if(board[0] === 'X') {
            winner = 'X'
        } else if(board[0] === 'O') winner = 'O'
    }
    else if(board[1] === board[4] && board[4] === board[7]) {
        if(board[1] === 'X') {
            winner = 'X'
        } else if(board[1] === 'O') winner = 'O'
    }
    else if(board[2] === board[5] && board[5] === board[8]) {
        if(board[2] === 'X') {
            winner = 'X'
        } else if(board[2] === 'O') winner = 'O'
    }

    //check diagonals
    if(board[0] === board[4] && board[4] === board[8]) {
        if(board[0] === 'X') {
            winner = 'X'
        } else if(board[0] === 'O') winner = 'O'
    }

    if(board[2] === board[4] && board[4] === board[6]) {
        if(board[2] === 'X') {
            winner = 'X'
        } else if(board[2] === 'O') winner = 'O'
    }

    //state winner
    if (winner !== "") {
        alert(`${winner} wins!`)
        location.reload()
    }
    else if (!board.includes('__')) {
        alert('Draw!')
        location.reload()
    }
}

let boardManager = (() => {
    let counter = 1
    let playerSymbol, otherSymbol

    let setSymbol = (desiredSymbol) => {
        if(desiredSymbol === 'X') {
            playerSymbol = 'X'
            otherSymbol = 'O'
        }
        else {
            playerSymbol = 'O'
            otherSymbol = 'X'
        } 
    }

    let getSymbol = (tileIndex) => {
        if (counter++ % 2 != 0) {
            gameBoard.board[tileIndex] = playerSymbol
            console.log(playerSymbol)
            return playerSymbol
        }
        else {
            gameBoard.board[tileIndex] = otherSymbol
            console.log(playerSymbol)
            return otherSymbol
        }
    }
    return { counter, getSymbol, setSymbol }
})()

let gameBoard = (() => {
    let board = [
        '__', '__', '__',
        '__', '__', '__',
        '__', '__', '__',
    ] 
    return { board }
})()

let BOARD = document.getElementById('board')
let desiredSymbol = prompt("What symbol do you want? (X, O)")

boardManager.setSymbol(desiredSymbol)

document.querySelectorAll('.section').forEach(item => {
    item.addEventListener('click', event => {
        let symbol = boardManager.getSymbol(item.id.replace('sec', ''))
        updateBoard(item.id, symbol)
        checkIfWinner()
        console.log(gameBoard.board)
    })
})
