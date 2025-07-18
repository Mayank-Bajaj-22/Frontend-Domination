// import React, { useState } from 'react'

// function App() {
//   //! const [score,setScore] = useState(10);
//   //! setScore(200);

//   const [banned, setBanned] = useState(false);

//   return (
//     <div className='flex flex-col p-4'>
//       <h1>{banned.toString()}</h1>
//       <button onClick={() => setBanned(!banned)} className='w-20 h-10 px-2 py-1 mt-2 rounded text-xs bg-blue-500 text-white'>Change</button>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react'

// function App() {

//   const [val, setVal] = useState(12);

//   return (
//     <div className='p-4'>
//       <h1>{val}</h1>
//       <button onClick={() => setVal((prev) => prev+1)} className='px-3 py-1 bg-blue-400 rounded-full'>change karo</button>
//     </div>
//   )
// }

// export default App;

import React, { useState } from 'react'

function App() {

  const [val,setVal] = useState({name: "harsh", isBanned: false})

  return (
    <div className='p-4'>
      <h1>name : {val.name}</h1>
      <h2>banned : {val.isBanned.toString()}</h2>
      <button onClick= {()=>setVal({...val, isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-full text-white text-xs`}>change</button>
    </div>
  )
}

export default App;

