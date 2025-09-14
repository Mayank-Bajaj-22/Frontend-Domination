import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './store/reducers/counterSlice'

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='m-auto container mt-5 bg-red-100 p-10'>
      <h1 className='mb-5 text-center font-bold text-5xl text-red-900'>Counter: {value}</h1>
      <div className='text-center'>
        <button onClick={()=>dispatch(increment())} className='text-red-900 border-red-900 rounded border-2 bg-transparent px-5 py-3'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='text-red-900 border-red-900 rounded border-2 bg-transparent px-5 py-3 mx-5'>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className='text-red-900 border-red-900 rounded border-2 bg-transparent px-5 py-3'>Increment By 5</button>
        <button onClick={()=>dispatch(incrementAsync(5))} className='text-red-900 ml-5 border-red-900 rounded border-2 bg-transparent px-5 py-3'>Increment By 5</button>
      </div>
    </div>
  )
}

export default App