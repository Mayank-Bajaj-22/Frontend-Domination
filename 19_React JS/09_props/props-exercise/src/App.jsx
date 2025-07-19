import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "Challeneger",
      artist: "Mayank",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Last Love",
      artist: "Pappu",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "One Day",
      artist: "Yuvraj",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "One Love",
      artist: "Piyush",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Badmoshi",
      artist: "Manish",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "Blender",
      artist: "Yogya",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item, itemIndex)=>{
        if(index === itemIndex) return {...item, added: !item.added}
        return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData} />
      <div className="px-20 mt-10 flex gap-4 flex-wrap">
        {songData.map((obj, index) => (
          <Card data={obj} handleClick={handleClick} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
