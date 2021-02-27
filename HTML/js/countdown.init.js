//Event Count Down

// The data/time we want to countdown to
var eventCountDown = new Date("December 25, 2022 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = eventCountDown - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + "<p class='count-head'>Days</p> "
document.getElementById("hours").innerHTML = hours + "<p class='count-head'>Hours</p> " 
document.getElementById("mins").innerHTML = minutes + "<p class='count-head'>Mins</p> " 
document.getElementById("secs").innerHTML = seconds + "<p class='count-head'>Secs</p> " 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "00:00:00:00";
}
}, 1000);