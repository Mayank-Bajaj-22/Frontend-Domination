// import React from "react";

// function Card({user}) {
//   return (
//     <>
//       {user.map((item, index) => {
//         return (
//           <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
//             <div className="image w-[4vw] h-[4vw] rounded-full bg-zinc-300 overflow-hidden">
//               <img className="w-full h-full object-cover" src={user.image} alt="" />
//             </div>
//             <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
//             <h4 className="font-semibold opacity-60">{user.email}</h4>
//             <p className="mt-1 text-center text-xs font-semibold tracking-tight">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
//               eum.
//             </p>
//             <button className="mt-4 px-3 py-1 bg-red-600 text-xs font-semibold rounded-lg text-white">
//               Remove It
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Card;

import React from "react";

function Card({ user, handleRemove, id }) {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
      <div className="image w-[4vw] h-[4vw] rounded-full bg-zinc-300 overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h1 className="mt-1 text-center text-xl font-semibold">{user.name}</h1>
      <h4 className="font-semibold opacity-60">{user.email}</h4>
      <p className="mt-1 text-center text-xs font-semibold tracking-tight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, eum.
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="mt-4 px-3 py-1 bg-red-600 text-xs font-semibold rounded-lg text-white"
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
