### Advance JavaScript
    - Understanding this call apply bind
    - Prototypal Inheritance
    - Closures
    - Event delegation
    - Higher Order Functions
    - Error Handling (try...catch blocks)
    - Custom Events

- this call apply bind
- this keyword js mein one of the most suspenseful keyword
- keyword ka matlab hota hai aisa word jiska koi matlab ho programming language mein
- this ki value baar baar badal sakti hai alag condition me , saari conditions ko seekh jaao to this ko samjh jaaoge

    - global
    - function
    - method
    - fnc inside method (es5) - window
    - fnc inside method (es6) - object
    - constructor fnc mein this ki value - new blank object
    - event listener mein this ki value - that element jispar event listener laga ho


✅ 1. call, apply, bind – Function Methods
    - These are used to control the this keyword inside functions.

✅ 2. Prototypal Inheritance
    - Objects can inherit properties and methods from other objects via the prototype chain.
    - Key idea: Every object in JavaScript has an internal link to another object called its prototype.

✅ 3. Closures
    - A closure is when a function remembers its lexical scope even when it's executed outside that scope.
    - Closures are used in:
        - Data privacy
        - Function factories
        - Memoization
        - setTimeout/setInterval

✅ 4. Event Delegation
    - A technique where a parent element handles events for its child elements, using event bubbling.
    - Benefit: You don't need to add separate event listeners to each li.