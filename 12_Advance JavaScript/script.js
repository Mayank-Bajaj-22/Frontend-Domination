// global - window
console.log(this);

// function - window
function abcd() {
  console.log(this);
}

// method - object
var obj = {
  name: function(){
    console.log(this);
  },
  age: 25,
  email: "mayankbajaj672@gmail.com",
}
obj.name();


// fnc inside method (es5) - window
var obj2 = {
  sayName: function(){
    function childfnc(){
      console.log(this);
    }
    childfnc();
  },
  age:25,
}
obj2.sayName(); 


// fnc inside method (es6) - object
var obj3 = {
  sayName: function(){
    const child = () => {
      console.log(this);
    }
    child();
  }
}
obj3.sayName();





// 👉 call()
// Calls a function with a specific this context and arguments passed individually.

function greet(age) {
  console.log(`Hello ${this.name}, age ${age}`);
}

const person = { name: "Mayank" };
greet.call(person, 20); // Hello Mayank, age 20


// 👉 apply()
// Similar to call(), but arguments are passed as an array.

greet.apply(person, [20]); // Hello Mayank, age 20


// 👉 bind()
// Doesn't call the function immediately. It returns a new function with this set.

const boundGreet = greet.bind(person, 20);
boundGreet(); // Hello Mayank, age 20
