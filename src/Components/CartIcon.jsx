import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../Hooks/CartContextHook';

function CartIcon({className}) {
  const {state, dispatch} = useCart()
  return (
    <button className={`relative grid place-items-center cursor-pointer ${className}`} onClick={()=> dispatch({type: 'Open_Cart'})}>
        {state.cart.length !== 0 && <sup className='bg-red-400 p-1 -top-2 w-4 h-4 grid place-items-center -right-2 rounded-full absolute'>{state.cart.length}</sup>}
        <FaShoppingCart className='text-lg' />
    </button>
  )
}

export default CartIcon