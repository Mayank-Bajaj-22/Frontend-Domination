// import React from 'react'

// function Card() {
//   return (
//     <div className='w-full h-screen bg-zinc-700'>
//         <div className='w-58 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
//             <div className='w-full h-36 bg-zinc-300'>
//                 <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww" alt="" />
//             </div>
//             <div className='w-full px-3 py-4'>
//                 <h2 className='font-semibold'>Amazon Basics.</h2>
//                 <p className='text-xs mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis iusto aut quibusdam?</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card


import React from 'react'

function Card() {
  const data = [
    {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww', name: "Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi. Ducimus, adipisci.", instock: true},
    {image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww', name: "Daily Objects", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi. Ducimus, adipisci.", instock: false},
    {image: 'https://images.unsplash.com/photo-1742790104412-acb445dbb285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww', name: "Kitchen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi. Ducimus, adipisci.", instock: true}
  ]
  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-200 gap-10 center'>
      {data.map((elem, index) => (
        <div key={index} className='w-52 h-fit bg-zinc-100 rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
            <img className='w-full h-full object-cover' src={elem.image} alt="" />
          </div>
          <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-3'>{elem.description}</p>
            <button className={`px-4 py-2 ${elem.instock ? "bg-green-600" : "bg-red-600"} rounded mt-4 text-zinc-100 text-xs`}>
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;
