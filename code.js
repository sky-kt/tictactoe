let BOARD = document.getElementById('board')

document.querySelectorAll('.section').forEach(item => {
    item.addEventListener('click', event => {
        boardManager.setSymbol(item.id.replace('sec', ''))
        updateBoard()
        console.log(gameBoard.board)
    })
})

let updateBoard = () => {
    console.log("updateBoard runs")
    for (let item in gameBoard.board) {
        if (gameBoard.board[item] !== '__') {
            boardChildren.childNodes[item].text = gameBoard.board[item]
        }
    }
    console.log('finished')
}

let boardManager = (() => {
    let counter = 1
    let setSymbol = (tileIndex) => {
        if (counter++ % 2 != 0) gameBoard.board[tileIndex] = 'X' 
        else gameBoard.board[tileIndex] = 'O'
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