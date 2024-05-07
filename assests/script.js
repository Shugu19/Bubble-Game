var timer = 60;
var score = 0;
var hitrn = 0;
var timerInterval;

function makeNewBubble() {
    var newbubble = "";

    for (var i = 1; i < 78; i++) {
        newbubble += `<div class="bubble">${Math.floor(Math.random() * 15)}</div>`;
    }
    document.querySelector("#bottompanel").innerHTML = newbubble;
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#setTimer").innerHTML = timer;
        } else {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function makeNewHit() {
    hitrn = Math.floor(Math.random() * 20);
    document.querySelector("#NewHit").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#NewScore").innerHTML = score;
}

function endGame() {
    document.querySelector("#bottompanel").innerHTML = `<h1 id="endGame">Game Over</h1>`;
    document.querySelector("#bottompanel").innerHTML += `<h2 id="finalScore">Your Score: ${score}</h2>`;
    if (!document.querySelector("#start")) { // Check if the button already exists
        document.querySelector("#bottompanel").innerHTML += `<button id="startAgain">Start Again</button>`;
        document.querySelector("#startAgain").addEventListener("click", function () {
            resetGame();
        });
    }
}




function resetGame() {
    clearInterval(timerInterval);
    timer = 60;
    score = 0;
    document.querySelector("#setTimer").innerHTML = timer;
    document.querySelector("#NewScore").innerHTML = score;
    makeNewBubble();
    makeNewHit();
    startTimer(); // Restart timer
}

document.querySelector("#bottompanel").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makeNewHit();
        makeNewBubble();
    }
});

document.querySelector("#start").addEventListener("click", function () {
    makeNewBubble();
    makeNewHit();
    startTimer();
});


