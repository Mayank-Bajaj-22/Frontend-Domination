const abcd = () => 12;
console.log(abcd()+1);

// bina body banaye aise hi likh do

const abcde = () => "mayank";
console.log("hey "+abcde());
// agar haam mayank ko {} is bracket me likenge toh apn ko manually return likhna padega

const abcdef = () => {return "mansieee"};
console.log("hey "+abcdef());


// const mmm = () => {name: "mayank"}
// isko vo object nhi samjega vo isko isi function ki body samjega

const object = () => ({name: "mayank", age: 18});
console.log(object()); 