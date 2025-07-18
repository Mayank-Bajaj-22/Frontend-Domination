import React, {useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card() {
  const [val,setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='flex relative w-62 h-36 bg-zinc-500 rounded-md overflow-hidden'>
        <img className={`${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" } shrink-0 transition-transform duration-300 w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" } transition-transform duration-300 shrink-0 w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1673264933061-f1ea43b13032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vdW50YWlufGVufDB8fDB8fHww" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 items-center justify-center flex bg-zinc-200 absolute bottom-2 rounded-full left-1/2 -translate-x-[50%] -translate-y-[50%]' style={{ backgroundColor: 'oklch(450.7% 0.022 261.325 / 0.3)' }}
        >
        <FaArrowRight />
        </span>
      </div>
    </div>
  )
}

export default Card;
