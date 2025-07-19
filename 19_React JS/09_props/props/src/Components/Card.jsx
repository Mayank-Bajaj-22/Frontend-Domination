// import React from "react";

//! M - 1:

// function Card(props) {
//   return (
//     <div>
//       <button className="px-3 py-1 bg-blue-600 text-zinc-100 text-xs rounded-full">
//         {props.mayank}
//       </button>
//     </div>
//   );
// }

// export default Card;



//! M - 2: (destructuring)
// function Card({mayank, color}) {
//   return (
//     <div>
//       <button className={`px-3 py-1 ${color} text-zinc-100 m-2 text-md rounded-md`}>
//         {mayank}
//       </button>
//     </div>
//   );
// }

// export default Card;



//? props drill usage

import React from 'react'

function Card({image, name, profession}) {
  return (
    <div className='w-60 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-42 bg-sky-200'>
          <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3 className='font-semibold'>{name}</h3>
            <h5 className='mb-1'>{profession}</h5>
            <button onClick={()=>alert('Added as a friend')} className='px-3 py-1 text-xs bg-blue-500  font-semibold rounded-md'>Add Friend</button>
        </div>
    </div>
  )
}

export default Card