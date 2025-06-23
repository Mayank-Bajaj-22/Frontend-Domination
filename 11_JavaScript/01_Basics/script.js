var a = 12;
var b = 22;
console.log("Hey");
// console alert prompt

// console.log
console.log("Mayank Bajaj");

// console.warn
console.warn("Mayank Bajaj");

// console.error
console.error("Mayank Bajaj");

// alert("badmoosi nhi mitr");

// prompt alert ka bhai hai jo ki alert se ek kadam aage hai

// prompt("papa bol dalle");

var a = 12;
var b = 32;
const c = 20;

// var discount = 10;
// discount = 20;

// const discount = 12;
// discount = 23;   not allowed error


// primitive and reference
// primitve me copy hota hai data
// reference ke data ko refer karta hai jab ekki value change hogi toh original data bhi change ho jayega
var arr = [1,2,3,4,5,6];
var b = arr;

b.pop();

// spread
var ar = [12, 13, 14, 15];
var ba = [...ar]; // ...ar means copies ar
// ab apan ba me change karenge toh vo ar ko change nahi karega
