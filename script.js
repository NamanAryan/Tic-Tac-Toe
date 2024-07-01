let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
const msg = document.querySelector(".msg-container");
let msg_main = document.querySelector("#msg");
const newGameBtn = document.querySelector(".new-game");

let count = 0;
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count ++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            showDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
    
const showWinner = (winner) => {
    msg_main.innerText = `Congratulations! The winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const showDraw = () => {
    msg_main.innerText = `The Game is a Draw...`;
    msg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let i of winPattern) {
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
})

resetBtn.addEventListener("click", () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
})