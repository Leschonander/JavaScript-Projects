const tile = document.querySelectorAll('#tile')
const winner = document.querySelector('#winner')
const BTN = document.querySelector('button')

let playerState = "Player One"

tile.forEach((elem) => elem.addEventListener('click', changeColor))
BTN.addEventListener('click', resetBoard)

function changeColor(){
    if (playerState === "Player One"){
        this.style.background = 'white'
        this.removeEventListener('click', changeColor)
        winCond()
        playerState = "Player Two"
    } else {
        this.style.background = 'black'
        this.removeEventListener('click', changeColor)
        winCond()
        playerState = "Player One"
    }
}

// Only 8 win conds so 16 total if statements... Could be refracted but how?
function winCond(){
    if (tile[0].style.background === 'white' && tile[1].style.background === 'white' && tile[2].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[0].style.background === 'black' && tile[1].style.background === 'black' && tile[2].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[3].style.background === 'white' && tile[4].style.background === 'white' && tile[5].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[3].style.background === 'black' && tile[4].style.background === 'black' && tile[5].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[6].style.background === 'white' && tile[7].style.background === 'white' && tile[8].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[6].style.background === 'black' && tile[7].style.background === 'black' && tile[8].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[0].style.background === 'white' && tile[3].style.background === 'white' && tile[6].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[0].style.background === 'black' && tile[3].style.background === 'black' && tile[6].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[1].style.background === 'white' && tile[4].style.background === 'white' && tile[7].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[1].style.background === 'black' && tile[4].style.background === 'black' && tile[7].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[2].style.background === 'white' && tile[5].style.background === 'white' && tile[8].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[2].style.background === 'black' && tile[5].style.background === 'black' && tile[8].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[0].style.background === 'white' && tile[4].style.background === 'white' && tile[8].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[0].style.background === 'black' && tile[4].style.background === 'black' && tile[8].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[2].style.background === 'white' && tile[4].style.background === 'white' && tile[6].style.background === 'white'){
        console.log('Player One Wins!')
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    } else if (tile[2].style.background === 'black' && tile[4].style.background === 'black' && tile[6].style.background === 'black'){
        console.log("Player Two Wins!")
        winner.innerHTML = `${playerState}`
        tile.forEach((elem) => elem.removeEventListener('click', changeColor))
    }
}

function resetBoard(){
    tile.forEach((elem) => elem.addEventListener('click', changeColor))
    tile.forEach((elem) => elem.style.background = 'none')
    playerState = "Player One"
    winner.innerHTML = ``
}


