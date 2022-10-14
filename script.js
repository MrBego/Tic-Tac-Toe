let myArray = [
    "","","",
    "","","",
    "","",""
];

const player1 = "X";
const player2 = "O";
let curentPlayer = player1;

const G0 = document.getElementById('G0')
const G1 = document.getElementById('G1')
const G2 = document.getElementById('G2')
const G3 = document.getElementById('G3')
const G4 = document.getElementById('G4')
const G5 = document.getElementById('G5')
const G6 = document.getElementById('G6')
const G7 = document.getElementById('G7')
const G8 = document.getElementById('G8')
const grid = document.querySelectorAll('.grid')

console.log(myArray);

// win condition
function checkWinner(){
    if (myArray[0] == "X" && myArray[1] == "X" && myArray[2] == "X") console.log('You win!');
    else if (myArray[3] == "X" && myArray[4] == "X" && myArray[5] == "X") console.log('You win!');
    else if (myArray[6] == "X" && myArray[7] == "X" && myArray[8] == "X") console.log('You win!');
    else if (myArray[0] == "X" && myArray[4] == "X" && myArray[8] == "X") console.log('You win!');
    else if (myArray[6] == "X" && myArray[4] == "X" && myArray[2] == "X") console.log('You win!');
    else if (myArray[0] == "X" && myArray[3] == "X" && myArray[6] == "X") console.log('You win!');
    else if (myArray[1] == "X" && myArray[4] == "X" && myArray[7] == "X") console.log('You win!');
    else if (myArray[2] == "X" && myArray[5] == "X" && myArray[8] == "X") console.log('You win!');
    else return;
}

function populateArray(){
    if (G0.textContent == 'X') myArray[0] = 'X';
    if (G1.textContent == 'X') myArray[1] = 'X';
    if (G2.textContent == 'X') myArray[2] = 'X';
    if (G3.textContent == 'X') myArray[3] = 'X';
    if (G4.textContent == 'X') myArray[4] = 'X';
    if (G5.textContent == 'X') myArray[5] = 'X';
    if (G6.textContent == 'X') myArray[6] = 'X';
    if (G7.textContent == 'X') myArray[7] = 'X';
    if (G8.textContent == 'X') myArray[8] = 'X';

    if (G0.textContent == 'O') myArray[0] = 'O';
    if (G1.textContent == 'O') myArray[1] = 'O';
    if (G2.textContent == 'O') myArray[2] = 'O';
    if (G3.textContent == 'O') myArray[3] = 'O';
    if (G4.textContent == 'O') myArray[4] = 'O';
    if (G5.textContent == 'O') myArray[5] = 'O';
    if (G6.textContent == 'O') myArray[6] = 'O';
    if (G7.textContent == 'O') myArray[7] = 'O';
    if (G8.textContent == 'O') myArray[8] = 'O';
}

function changePlayer(){
    if (curentPlayer === player1) curentPlayer = player2;
    else curentPlayer = player1;

}

//hover & click
grid.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hover')
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('hover')
    })
    box.addEventListener('click', () => {
        box.textContent = curentPlayer
        populateArray()
        checkWinner()
        changePlayer()
    })
})
