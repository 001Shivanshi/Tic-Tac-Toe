let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    enablebtns();
    msgContainer.classList.add("hide");
    btns[a].classList.remove("samecolor");
    btns[b].classList.remove("samecolor");
    btns[c].classList.remove("samecolor");

}
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});


const disablebtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};
const enablebtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
    btns[a].classList.add("samecolor");
    btns[b].classList.add("samecolor");
    btns[c].classList.add("samecolor");

}
let a, b, c;



const checkWinner = () => {
    for (let pattern of winpatterns) {
        let posval1 = btns[pattern[0]].innerText;
        let posval2 = btns[pattern[1]].innerText;
        let posval3 = btns[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner", posval1);
                a =pattern[0];
                b =pattern[1];
                c =pattern[2];
                showWinner(posval1);


            }
        }
    }

}
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);