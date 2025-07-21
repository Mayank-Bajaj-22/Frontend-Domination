// import React from 'react'

// const User = () => {
//   return (
//     <div className='w-1/2 m-auto mt-10'>
//       <h1 className='text-5xl text-red-300 mb-2'>User</h1>
//       <p className='mb-2 text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ut accusantium ad beatae sequi mollitia deleniti? Nisi ratione fugiat et totam dolore a, quisquam, voluptatem, non qui repudiandae fugit unde.</p>
//       <button className='text-white p-3 bg-zinc-400'>Explore More</button>
//     </div>
//   )
// }

// export default User;

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl text-blue-600 mb-2 font-semibold'>User</h1>
      <div className='flex w-1/2 flex-col mt-5'>
        <Link className='p-3 bg-red-200 text-2xl mb-3 rounded-md' to="John">John</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 rounded-md' to="">Ayush</Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 rounded-md' to="">Mayank</Link>
      </div>
    </div>
  );
};

export default User;

// rafce