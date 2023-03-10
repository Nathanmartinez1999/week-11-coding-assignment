console.log(`We are working with JQuery today!`);

const play = $('#play');
const instructions = $('#instructions');
const boardGame = $('#boardGame');

play.on("mousedown", () => {
    makeBoard();
    if (play.text() === 'Play') {
        play.text(`Restart`);
    } else {
        play.text('Play');
    }
    startGame();
})

const makeBoard = () => {
    // boardgame.empty();
    // console.log("ran");

    let count = 1;

    for (let r = 0; r < 3; r++) {
        let row = $(`<div/>`);
        for (let c = 0; c < 3; c++) {
            let button = $(`<button/>`, {
                id: `${count}`,
                class: `slot`
            });
            row.append($(button).clone().text(`?`));
            count++;
        }
        $(boardGame).append(row);
    }
}

const startGame = () => {
    let player1 = {};
    let player2 = {};

    const X = "X";
    const O = "O";
    const firstMove = Math.random() < 0.5 ? X : O;
    currentPlayer = firstMove;
    let move = 0;
    let winner = false;

    instructions.prepend(`First move goes to: ${firstMove}`);

}