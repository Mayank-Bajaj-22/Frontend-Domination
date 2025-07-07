var state = [1,2,3,4,5];
var papu = [...state];
// ... is spread operator
papu.pop()
console.log(state);
console.log(papu);

var state1 = {name: "mayank", age: 18};
var copy = {...state1};
copy.name = "doremon";
state1 = copy;
console.log(state1);
console.log(copy);