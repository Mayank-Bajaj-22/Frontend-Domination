state ek data hota hai, react is data ka khayaal rakhta hai, jab bhi ye data change hota hai react page ko update karta hai

state koi bhi data ho sakta hai, jaise ki score = 0
useState(0)

maan lete hai aapke game mein score by default 0 se shuru hota hai and future mein wo score badhega by 10 aur aapko page pe show bhi karna hai jab score badhe, to use case mein aapka score variable ek state mein rakhna jaruri hai, kyuki react sirf use change krta hai jo state mein hota hai

useState hame 2 chize deta hai or yeh ek array hota hai uss array ka first index ke value hota hai or second index ek function hota hai jo first index ko change karta hai

example :
const ans = useState(0);
ans is an array with 2 members
ans[0] = value
ans[1] = function

const [a,b] = useState(false);
here [a,b] means destructuring , apan a ke through useState array ki first value ko access kar payenge ko b ke through function

useState state ko turant update nhi karta, wo useState state ko update karta apne hisab se function completion ke baad to fix performance issues
