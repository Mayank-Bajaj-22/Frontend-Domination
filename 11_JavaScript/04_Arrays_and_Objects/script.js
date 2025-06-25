// add all members of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let i=0; i<=4; i++){
    sum = sum + arr[i];
}
console.log(sum);


// count all members 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let count = arr1.length;
console.log(count);


var users = ["harsh", "mayank", "golu", "yogya", "yash"];
console.log(users[1]);

// adding all members of array
var arr2 = [1,2,3,4,5];
// how to loop an array and do something with each element
arr2.forEach(function(val){
  console.log(val);
})  


// objects
// var obj1 = {};
// var obj2 = new Object();
var obj = {
  name: "Mayank",
  age: 18,
  email: "mayankbajaj672@gmail.com",
  contact: 9999999999,
}

console.log(obj.age);

var mayank = {
  company: "canon",
  rice: 1200,
  for: "camera",
  isWorking: true,
}
console.log(mayank.for);