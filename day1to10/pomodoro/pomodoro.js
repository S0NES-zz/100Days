let start, stop, reset, wMinutes, wSeconds, bMinutes, bSeconds;

start = document.getElementById("start");
stop = document.getElementById("stop");
reset = document.getElementById("reset");

workTimer = document.getElementById("work-timer");
breakTimer = document.getElementById("break-timer");
wMinutes = document.getElementById("w-minutes");
wSeconds = document.getElementById("w-seconds");
bMinutes = document.getElementById("b-minutes");
bSeconds = document.getElementById("b-seconds");

var startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
    console.log(true);
  } else {
    alert("Timer is already running");
  }
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

reset.addEventListener("click", function () {
  wMinutes.innerText = 25;
  wSeconds.innerText = "00";

  bMinutes.innerText = 5;
  bSeconds.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

function timer() {
  //Work Timer Countdown
  if (wSeconds.innerText != 0) {
    wSeconds.innerText--;
  } else if (wMinutes.innerText != 0 && wSeconds.innerText == 0) {
    wSeconds.innerText = 59;
    wMinutes.innerText--;
  }

  //Break Timer Countdown
  if (wMinutes.innerText == 0 && wSeconds.innerText == 0) {
    workTimer.style.display = none;
    breakTimer.style.display = flex;
    
    if (bSeconds.innerText != 0) {
      bSeconds.innerText--;
    } else if (bMinutes.innerText != 0 && bSeconds.innerText == 0) {
      bSeconds.innerText = 59;
      bMinutes.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wMinutes.innerText == 0 &&
    wSeconds.innerText == 0 &&
    bMinutes.innerText == 0 &&
    bSeconds.innerText == 0
  ) {
    
    workTimer.style.display = flex;
    breakTimer.style.display = none;
    wMinutes.innerText = 25;
    wSeconds.innerText = "00";

    bMinutes.innerText = 5;
    bSeconds.innerText = "00";
  }
}

function stopInterval() {
  clearInterval(startTimer);
}
