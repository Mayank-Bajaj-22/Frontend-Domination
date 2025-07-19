import React from 'react'

function Card({data, handleClick, index}) {

    const {image, name, artist, added} = data;

  return (
    <div className='w-60 bg-zinc-100 mt-10 p-4 flex gap-4 relative rounded-md pb-8'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='text-md font-semibold leading-none'>{name}</h3>
            <h5 className='text-sm mt-1'>{artist}</h5>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 whitespace-nowrap py-3 ${added === false ? "bg-orange-600" : "bg-green-600"} -bottom-10 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white text-xs rounded-full absolute`}>{added === false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Card;