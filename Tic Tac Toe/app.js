let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
let turnMessage = document.querySelector('#turn');

let turnO = true;//playerO

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
];

reset.addEventListener('click', () => {
    location.reload();
})

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
        console.log('Box was Clicked');
        if(turnO)
        {
            box.innerText = 'O';
            turnO = false;
            turnMessage.innerText = 'X\'s Turn';
        }else{
            box.innerText = 'X';
            turnO = true;
            turnMessage.innerText = 'O\'s Turn';
        }
        box.disabled = true;
    });
});