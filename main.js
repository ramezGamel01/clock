function clock() {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  var timeZone = "AM";

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (hours > 12) {
    hours = hours - 12;
    var timeZone = "PM";
  }
  if (hours == 0) {
    hours = 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  var clock = hours + " : " + min + " : " + sec + " " + timeZone;

  document.getElementById("clock").innerHTML = clock;
}
setInterval(clock, 1000);
clock();
