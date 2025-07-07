// ek array hai saare numbers jo ki 5 se baade ho unke 5 jod dena and baaki numbers waise ke waise return karo naye array mein

var state = [11,22,3,45,5,6,7,5,9,1,2,12,4,14];
const ans = state.map(elem => elem>5 ? elem+5 : elem);
console.log(ans)

// ? = if , : false

// terniary operator 