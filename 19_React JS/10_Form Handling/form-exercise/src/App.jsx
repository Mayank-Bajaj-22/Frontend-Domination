//? using useRef

// import React, { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name.current.value, age.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={name} placeholder="name" type="text" />
//       <input ref={age} placeholder="age" type="text" />
//       <input type="submit" />
//     </form>
//   );
// }

// export default App;

//? controlled form handling

// import React, { useState } from "react";

// function App() {

//   const [val, setVal] = useState({name: "", email: ""});

//   const handleSubmit = (hello)=>{
//     hello.preventDefault();
//     console.log(val)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={(event)=>setVal({...val, name: event.target.value})} placeholder="name" type="text" />
//       <input onChange={(event)=>setVal({...val, email: event.target.value})} placeholder="email" type="email" />
//       <input type="submit" />
//     </form>
//   );
// }

// export default App;

//? react hook form

import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  return (
    <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("name")} placeholder="name" type="text" />
      <input {...register("email")} placeholder="email" type="email" />
      <input type="submit" />
    </form>
  );
}

export default App;
