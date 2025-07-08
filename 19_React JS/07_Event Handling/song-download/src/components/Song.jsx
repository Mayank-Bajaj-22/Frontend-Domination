import React from 'react'

function Song() {
    const data = [
        {name: "Mahiya Ve", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "Junoon", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusanti!"},
    ];
    const handleClickDownload = () => {alert("chal raha hai")};

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col items-center justify-center gap-4'>
        {data.map((elem, index) => (
            <div key={index} className='w-90 song px-3 py-2 bg-zinc-100 rounded-md'>
                <h3 className='font-semibold text-xl'>{elem.name}</h3>
                <p className='text-xs mt-2'>{elem.description}</p>
                <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-500 rounded mt-3 text-xs text-zinc-100 rounded mt-3'>Download Now</button>
            </div>
        ))}
    </div>
  )
}

export default Song