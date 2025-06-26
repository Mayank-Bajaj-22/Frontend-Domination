// Selection and save
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

document.querySelector('button'); // selecting
var btn = document.querySelector('button'); // selecting and saving

// id
var abcd = document.querySelector('#abcd');

// class
var classabcd = document.querySelector('.abcd');

// tag
var h3 = document.querySelector("h3");

// agar aap ke pass bohot saare h3 and aap select krte ho to srf pahla h3 select hoga
// for selecting that all we use document.querySelectorAll();

// textContent and innerHTML
var btn = document.querySelector("button");
btn.textContent = "Starting...";
// = means pehle wale ko hta ke new wala likh do
// += means pehle wale ke aage likh do new wale ko

var h1 = document.querySelector("h1");
// h1.innerHTML += "<i>hello</i>";
h1.style.color = "red";
h1.style.fontFamily = "gilroy";
h1.style.fontSize = "60px";

// textContent - when we have to write only text
// innerHTML - when we have to write tag and text