var arr = [1,2,3,4,5];
// map - haar element par kuch karo and naye array mein rakho
// foreach / map ke andar aata hai function and function ke andar aata hai value
// map ke andar return krna bohot jaruri hai
// map ke andar return krne ke wajah se hi elements naye aaray mein place hote hai

const ans = arr.map(val => val*12)

console.log(ans);

// state ek array hai usmein numbers hai and aapko har number ko +1 karna hai

var state = [1,2,3,4,5];
const ans1 = state.map(val1 => val1+1)
console.log(ans1); 
