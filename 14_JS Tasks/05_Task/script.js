// 5. Build a countdown timer that starts when a button is clickedand update the display in real-time.

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var int;

start.addEventListener("click", function(){
    var count = 0;
    int = setInterval(function(){
    h3.textContent = count;
    count++;
    }, 1000);
})

stop.addEventListener("click", function(){
    clearInterval(int);
})
