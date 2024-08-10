let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
let turnMessage = document.querySelector('#turn');
let counter = 0;


let turnO = true; // playerO

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

reset.addEventListener('click', () => {
  location.reload();
});

boxes.forEach((box) => {
  box.addEventListener('click' , () => {
    console.log('Box was Clicked');
    counter++;
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
      turnMessage.innerText = "X's Turn";
    }else {
      box.innerText = 'X';
      turnO = true;
      turnMessage.innerText = "O's Turn";
    }
    if(box.innerText === 'O'){
        box.style.color = 'red';
    }else{
        box.style.color = 'green';
    }
    box.disabled = true;

    checkWinner();
  })
})

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);    
    // console.log(boxes[pattern[0]].innerText, 
    //             boxes[pattern[1]].innerText, 
    //             boxes[pattern[2]].innerText);
    let posn1 = boxes[pattern[0]].innerText;
    let posn2 = boxes[pattern[1]].innerText;
    let posn3 = boxes[pattern[2]].innerText;

    if(posn1 != '' && posn2 !='' && posn3 != '') {
        if(posn1 === posn2 && posn2 === posn3) {
            console.log('Winner', posn1);
            turnMessage.innerText = `Congratulations! ${posn1} Wins!`;
            disableBoxes();
        }
        if(counter === 9 && posn1 != posn2 && posn2 != posn3) {
            turnMessage.innerText = 'It\'s a Draw!';
        }
    }
  }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}