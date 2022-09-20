var time = document.querySelector(".time");
var start_btn = document.querySelector(".start");
var stop_btn = document.querySelector(".stop");
var reset_btn = document.querySelector(".reset");

var seconds = 0;
var interval = null;

start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer() {
  seconds++;
  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds - (hrs * 3600))/ 60);
  var secs = seconds % 60;

  if (secs < 10){
    secs = "0" + secs;
  }
  if (mins < 10){
    mins = "0" + mins;
  }
  if (hrs < 10){
    hrs = "0" + hrs;
  }

  time.innerHTML =  hrs + ":" + mins + ":" + secs;
}

function start() {
  if (interval){
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop(){
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time.innerText = "00:00:00";
}
