document.getElementById("submit").addEventListener("click", submit);

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Time:";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";

    var imgEl = document.createElement("img");

    // imgEl.setAttribute("src", "GAMEOVER.jpg");
    // mainEl.appendChild(imgEl);

}

setTime();