var timer = 6;
var score = 0;
var hitrn = 0;


function makeNewBubble() {
    var newbubble = "";

    for (var i = 1; i < 91; i++) {
        newbubble += `<div class="bubble">${Math.floor(Math.random() * 20)}</div>`;
    }
    document.querySelector("#bottompanel").innerHTML = newbubble;
}

function startTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#setTimer").innerHTML = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#bottompanel").innerHTML = `<h1 id="endGame">Game Over</h1>`;
            document.querySelector("#bottompanel").innerHTML += `<h2 id="finalScore">Your Score: ${score}</h2>`;
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
    startTimer();
    makeNewHit();
});

document.qu("#startAgain").addEventListener("click", function () {

    makeNewBubble();
    startTimer();
    makeNewHit();
});
