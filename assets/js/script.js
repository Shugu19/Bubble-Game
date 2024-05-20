/* jshint esversion: 6 */

var timer = 60;
var score = 0;
var hitrn = 0;
var timerInterval;

function makeNewBubble() {
    var newbubble = "";
    var bubbleNumbers = [];
    for (var i = 0; i < 78; i++) {
        var bubbleNumber = Math.floor(Math.random() * 20);
        bubbleNumbers.push(bubbleNumber);
    }

    // Ensure at least one bubble matches the hit number
    if (!bubbleNumbers.includes(hitrn)) {
        var randomIndex = Math.floor(Math.random() * 78);
        bubbleNumbers[randomIndex] = hitrn;
    }

    // Create bubble elements from the array
    for (var i = 0; i < bubbleNumbers.length; i++) {
        newbubble += `<div class="bubble">${bubbleNumbers[i]}</div>`;
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
    if (!document.querySelector("#startAgain")) { // Check if the button already exists
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

document.querySelector("#restartButton").addEventListener("click", function () {
    resetGame();
});
