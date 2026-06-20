import React from 'react'
import { useCart } from '../Hooks/CartContextHook'

function Counter({increased, item, decreased}) {
const {state, dispatch} = useCart()
  return (
    <div className='flex items-center rounded-2xl'>
        <button
        onClick={decreased}
        disabled={item.quantity === 1}
        className={`left text-xl rounded-l-2xl p-0.5 disabled:bg-yellow-200 disabled:cursor-not-allowed
        bg-yellow-500 text-center active:scale-95 cursor-pointer px-4`}>
            -
        </button>
        <div className='p-2 text-center'>{item.quantity}</div>
        <button role='button' 
        disabled={item.quantity === 10}
        onClick={increased}
        className='right text-xl bg-yellow-500 rounded-r-2xl disabled:bg-yellow-200 disabled:cursor-not-allowed 
        active:scale-95 p-0.5 text-center cursor-pointer px-4'>
            +
        </button>
    </div>
  )
}

export default Counter