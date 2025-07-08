import React from 'react'
import Card from "./Components/Card";
import { div } from 'three/tsl';

function App() {
  const data = ["harsh", "mayank","mansi"];
  return (
    <div>
      {/* <Card /> */}

      {/* error beacuse of key prop */}
      {/* {data.map(() => <h1>hey</h1>)} */}

      {/* {data.map((value, index) => <h1 key={index} >hey</h1>)} */}

      {/* <div>
        {data.map((elem) => (
          <div className='w-fit px-3 py-3 bg-zinc-300 rounded-md'>
            {elem}
          </div>
        ))}
      </div> */}

      <Card />

    </div>
  )
}

export default App