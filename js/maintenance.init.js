var seconds = 3599;
function secondPassed() {
var minutes = Math.round((seconds - 30)/60);
var remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds; 
  }
  document.getElementById('maintenance').innerHTML = minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('maintenance').innerHTML = "Buzz Buzz";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('secondPassed()', 1000);