var timer = 60;
var hit = 0;

function makeNewBubble() {
    var newbubble = "";

    for (var i = 1; i < 85; i++) {
        newbubble += `<div class="bubble">${Math.floor(Math.random() * 100)}</div>`;
    }
    document.querySelector("#bottompanel").innerHTML = newbubble;
}
function startTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#setTimer").innerHTML = timer;
        }
        else {
            clearInterval(timer);
        }

    }, 1000);
}
function makeNewHit(){
    var hit = Math.floor(Math.random() * 100);
    document.querySelector("#NewHit").innerHTML = hit;
}



makeNewBubble();
startTimer();
makeNewHit();