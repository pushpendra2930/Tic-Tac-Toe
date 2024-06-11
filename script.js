const btns = document.querySelectorAll(".btn");
const reset_btn = document.getElementById("reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");

let turnO = true; //playerX or playerO
let count = 0; // Draw game condition

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("button is clicked");
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBtns();
};



newGameBtn.addEventListener('click', ()=>{
  msgContainer.classList.add("hide");
  enableBtns();
})


const disableBtns = () => {
    for (let btn of btns) {
      btn.disabled = true;
    };
}

const enableBtns = () =>{
    for (let btn of btns) {
      btn.disabled = false;
      btn.innerText = "";
    }
}

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBtns();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 === pos2 && pos2 === pos3) {
            // console.log("winner", pos1);
            showWinner(pos1);
            return true;
        }
    }
  }
};
