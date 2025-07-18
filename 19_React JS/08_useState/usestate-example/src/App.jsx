// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState([1,2,3,4,5,6]);
//   return (
//     <div className='p-5'>
//       {val.map(item =><h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=val.length-1))} className='px-2 py-1 bg-blue-500 rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App;



// array removing
// import React, {useState} from 'react'

// function App() {
//   const [val,setVal] = useState([1,2,3,4,5,6]);
//   return (
//     <div>
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter(item =>item%2 !== 0))} className='px-3 py-2 text-white text-xs bg-blue-500  rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App;



// array addition
// import React, {useState} from 'react'

// function App() {
//   const [val,setVal] = useState([
//     {name: "mayank", age: 19},
//     {name: "mansi", age: 19},
//     {name: "mitali", age:21},
//   ]);

//   return (
//     <div>
//       {val.map((item) => (
//         <div>
//           <h1>{item.name}</h1>
//           <h2>{item.age}</h2>
//         </div>
//         ))}
//       <button onClick={()=>setVal(()=>val.map(item=> item.name === "mitali" ? ({name: "mitali", age:22}) : item))} className='px-3 py-2 text-white text-xs bg-blue-500  rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App;



import React, {useState} from 'react'
import Card from "./Components/Card";

function App() {

  // const [val,setVal] = useState(false);

  return (
    <div>
      <Card/>
    </div>
  )
}

export default App;
