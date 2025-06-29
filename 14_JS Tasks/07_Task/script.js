// 7. Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.

var prg = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var count = 0;
var int = setInterval(function(){
    if(count === 100){
        clearInterval(int);
        h3.style.opacity = "1";
    }
    count++;
    prg.style.width = count + '%';
}, 100);
