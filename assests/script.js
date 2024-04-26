var timer = 60;
function makeNewbubble() {
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




makeNewbubble();
startTimer();