// DEVELOPER PROBLEMS
//-------------------



// Debugging a TypeError: Cannot read property 'X' of undefined:
var obj = {};
obj.name; //! no error
obj.name.age; //! script.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'age')

// agar aapko nahi pata ki obj me koi property exists karti hai ya nhi jab yeh use karo
obj?.name?.age;



// Handling Asynchronous Operations
//? ek button banao and us button ke click par aapko ek user lekar aana hai random tareeke se and ussey add karna hai dom mein

// Working with Local Storage
// blocking scroll until something happens
// custom tooltip