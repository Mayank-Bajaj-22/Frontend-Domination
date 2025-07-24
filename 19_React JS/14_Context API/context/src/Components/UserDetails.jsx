import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const { users } = useContext(UserContext);
  console.log(users[id])
  return (
    <div>
      <h1 className='text-4xl mb-4 font-bold text-blue-500'>{users[id].username}</h1>
      <h1 className='text-2xl font-bold text-red-300'>{users[id].city}</h1>
      <button onClick={()=>navigate(-1)} className='bg-red-500 text-white px-2 py-1 mt-4 rounded'>Go Back</button>
    </div>
  )
}

export default UserDetails