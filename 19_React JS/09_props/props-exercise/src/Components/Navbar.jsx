import React from 'react'
import styles from './style.module.css'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-5 flex justify-between items-center'>
        <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
        <div className='flex p-2 px-4 text-white bg-orange-600 gap-3 rounded-full'>
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar