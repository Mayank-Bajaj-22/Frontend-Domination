var state = [1,2,3];
state.pop()
// state is immutable which means you can not directly change it
console.log(state);

// state ko immutable way mein kaise update karein 
// immutable simple words me pichle value change na ho 

var state = [1,2,3];
state = [1,2]
// state.pop()
// console.log(state)

// real copy karna padega reference nhi