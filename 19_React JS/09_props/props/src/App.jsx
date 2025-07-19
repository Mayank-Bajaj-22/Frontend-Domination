// import React from 'react'
// import Card from './Components/Card'

// function App() {
//   return (
//     <div className='flex'>
//       <Card mayank="Know More" color="bg-blue-600" />
//       <Card mayank="Download" color="bg-red-600" />
//     </div>
//   )
// }

// export default App

//? props drill usage

import React, { useState } from "react";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      name: "John",
      profession: "Painter",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Amit",
      profession: "Artist",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Mayank",
      profession: "Businessman",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Piyush",
      profession: "Thalua",
      image:
        "https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [val, setVal] = useState(data);
  const dummy = (cardindex) => {
    setVal((prev) => {
      return prev.map((item, index) => {
        if (index === cardindex) {
          return {...item, friends: !item.friends}
        }
        return item;
      });
    });
  };
  //! state jaha banti hai vaha hi modify ki ja sakti hai

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 gap-4 flex items-center justify-center">
        {val.map((item, index) => (
          <Card
            key={index}
            dummy={dummy}
            index={index}
            image={item.image}
            name={item.name}
            profession={item.profession}
          />
        ))}
      </div>
    </>
  );
}

export default App;

//! props drilling event handling
