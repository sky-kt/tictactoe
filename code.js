let BOARD = document.getElementById('board')

document.querySelectorAll('.section').forEach(item => {
    item.addEventListener('click', event => {
        let symbol = boardManager.setSymbol(item.id.replace('sec', ''))
        updateBoard(item.id, symbol)
        console.log(gameBoard.board)
    })
})

let updateBoard = (section, symbol) => {
    let sectionToChange = document.getElementById(section)
    console.log(symbol)
    sectionToChange.textContent = symbol 

}

let boardManager = (() => {
    let counter = 1
    let setSymbol = (tileIndex) => {
        if (counter++ % 2 != 0) {
            gameBoard.board[tileIndex] = 'X'
            return 'X'
        }
        else {
            gameBoard.board[tileIndex] = 'O'
            return 'O'
        }
    }
    return { counter, setSymbol }
})()

let gameBoard = (() => {
    let board = [
        '__', '__', '__',
        '__', '__', '__',
        '__', '__', '__',
    ] 
    return { board }
})()