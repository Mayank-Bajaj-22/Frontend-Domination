// 9. Build a character counter for a text area or input field, which updates input real-time as the user types and enforces a character limit.

var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

txtarea.addEventListener("input", function(){
    counter.textContent = txtarea.value.length;
})
