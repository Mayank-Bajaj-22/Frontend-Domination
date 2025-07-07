var state = {name: "mayank", age:24};

var copy = {...state};
copy.name = "sizuka";
console.log(copy)
state = copy;
console.log(state);