## js the language
    - managed by ecmascript
    - naye features, puraane htana, kharab features sahi krna and overall development of js
    - es5 (var) and es6 (let)
    - js the language = code likkhna seekhna, main features
    - js the dom = code linkhar cheejein banana seekhna

### basics :
    - file connect karenge and load karenge script ko, basics of code execution, grammer and understanding of errors

### inbuilt features :
    - intrepeters pe hi chalti h inbuilt  
    - console(log, warn, error) , alert , prompt
    - prompt is just like brother of alert but it ask something to type with alert, which is used later
    - java compiler based language hai and c also

- har programming language me data se deal krna hota hai, wo alag alag prakar ka ho skta hai, ab aisa data jisse humein deal karna hai, wo save to krna padeg na, to wo data save krne ke liye hume koi saving space chahiye jaha par data save hojaaye and ye save krne ke liye unhe kuchh naam bhi dena padega and isilye humein variables and constants banaane padte hai taaki data save hojaaeand unka koi naam bhi ho taaki hum baad mein unhe access kar paaye

### variables and constants :
    - variables and constants data ko store krne ke kaam aate hai, variables me data store and change nhi kr skte h but in constant ek fix data hi store ho skta hai and dono hi browser par memory late hai and browser RAM par chalta hai to technically dono RAM par chalte hai ya fir space lete hai

### compilers and interpreters
    - js the language english words use krti hai and computers english nahi smjhte hai 0 and 1 jisko current flow and current bypass bhi kah skte ho, hum chaate hai ki hum english mein likhne computer  se baat krle , to hum ek translator laayenge joki hamara code english mein lega and usko 0 and 1 mein convert kr dega

    - interpreters -> byte code -> machine code
    - compilers -> machine code
    - compiler and interpeters translators hai jo ki english code ko convert kr rhe hai machine code mein
    - jit compiler - interpreter ki shuraati takkat use krta hai and compiler ki running takkat use krta hai 

### window
    - there are many features which are frequently used in js and they are the not the parts of js, they are not the part of js the language but they are available in the browser, and when you see them in js they are called from the browser

    - window ek bucket samjh lo jismein wo cheeje available hai jo browser deta hai js mein use karne ke liye kyuki wo saari cheejein js ka part nahi balki browser ka part hai which is available to use in js, we can also say that they are provided by browser to use in js, all these features which are made available via browser are put inside window


### types - primitive and reference data types
    - [] () {} - reference data types
    - types matlab data ka roop
    - example of data types:
        - harsh - string
        - 12 - integer
        - 12.3 - float
        - 22.0 - float
        - true - boolean
        - a - character 


### conditionals
    - if else else-if ternary operator switch case
    - jab bhi aapko program mein decision lena ho, ki aage ka execution kaisa ho to waha par if else else-if use hota hai
    - truthy and falsy values = har value ko true ya false banaya ja skta hai, ye depend krta hai, ki wo value ka type kya hai, agar wo value truthy hai to true and falsy hai to false
    - null undefined NaN 0 "" '' document.all - false
    - baaki sab truthy


### loops = repeat
    - for  while  do-while  foreach  forin  forof
    - glory with loops
    - try to create basic loop structure

- foreeach ek normal loop nahi hai for and while li tarah jo numbers pe ya start end par chalta hai, foreach loop sirf array pe chalta hai


### functions - es5 and es6
    - es5
        - function statements
        - function expressions
        - anonymous function

    - es6: fat arrow function
        - a) basic arrow function
        - b) fat arrow with one parameter
        - c) fat arrow with implict return

    - functions - js mein function normal programming language jaise nahi hai, iska matlab hai, yaha par js mein functions bananeke liye type nahi batana padta bas aapko function word likhna padega and aap usey koi nam deke bana skte ho
    - indepth - js mein functions first class functions ka darja diya gaya hai, jiska matlab hai, ki js mein functions ko value ki tarah treat kiya ja sakta hai

    What is Function?
        - koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal skte hai

    Why we need?
        - to reuse code and to wrap the code which we want to run in future at some point of time
    How to use?
        function abcd(){
            // code
        }
        if we write function abcd(~param) - ~param matlab ho bhi sakta hai ya nhi bhi

    Extra we should know - parameters and arguements


### return
    - return ka matlab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return functions ke andar lagta hai
    - aisa function jo kuch return nahi karta wo bhi undefined return krta hai


### undefined, not defined, null
    - undefined is a value
        - ye value tad di jaati hai jab variable ko koi value naa mili ho,
        iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap issey default value bhi kah skte ho
        var a;

    - not defined is an error
        - koi particular element/identity ko use karna without it's declaration gives an error, and that error is not defined error

    - null is also a value
        - this is a value which resolve like, not found
        - null is recived when something is not found


### arrays
    - what
        - array matlab jab bhi aapko ek ya ek se jaada value ek saath rakni ho

    - how
        - var arr = [1, 2, "3", function(){}, [], 4];

    - why
        - a lot of times the data is in the shape of more than one member, to contail all data altogether, we can save it in array

### loop with array
    - add all members of array
    - count all members 


### objects  * till here all should know *
    - what
        - object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai

    - how
        - var mayank = {
            company: "canon",
            price: 1200,
            for: "camera",
            isWorking: true,
        }
        console.log(mayank.for);

    - when and why
        - jab ek object ki bohot saari detail save karni ho


### synchronous (Main Stack) asynchronous js (Side Stack)
    - synchronous code mein code humesha line by line chalta hai

    - asynchronous code line by line nahi chalta, saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dediya jaata hai


prototypal inheritance
asynchronous
es6 climax
questions
miscellaneous - switch case and ternary do-while forin forof

interview prep
this call apply bind
prototypes
prototypal inheritance
