// IF ELSE STATEMENT USING ROCK PAPER SCISSOR GAME 
let player1 = "Rock";
let player2 = "Paper";
if (player1 === player2) {
    console.log("its a Tie!");
}
else if ((player1 === "Rock" && player2 === "Scissor") ||
    (player1 === "Scissor" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("player 1 win this match");
}
else {
    console.log("player 2 win this match successfully!");
}
;
export {};
