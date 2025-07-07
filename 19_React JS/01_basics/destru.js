var obj = {name: "mayank", age: 18};
// obj.age
const {age} = obj;


var obj1 = {name: "string", 
    social: {
        facebook: {
            first: "hahaha",
            sec: "jvboijvb",
        },
    },
};

// obj.social.facebbok.sec

const {first} = obj1.social.facebook;
console.log(first); 

var arr = [12, function(){}];
var [first1, second] = arr;
console.log(first1);
console.log(second);