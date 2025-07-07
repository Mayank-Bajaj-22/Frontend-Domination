var arr1 = [1,2,3,4,5,6];
const ans1 = arr1.filter(elem => elem>5);
console.log(ans1)

var arr = [
    {name: "mayank", gender: "male", age: 18},
    {name: "mansi", gender: "female", age: 18},
    {name: "papu", gender: "male", age: 28},
]

const ans = arr.filter(elem => elem.age === 18);
console.log(ans)