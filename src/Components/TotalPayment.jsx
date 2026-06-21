import React from 'react'
import { useCart } from '../Hooks/CartContextHook'

function TotalPayment() {
    const {state, dispatch} = useCart()
    return (
        <div>
            <div className='border-t border-gray-200 border-b py-3 mt-4'>
                <div className="flex justify-between items-center">
                    <p className='text-gray-400 font-light'>Subtotal</p>
                    <p className='text-lg font-bold'>${state.total}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-gray-400 font-light'>Service Fee</p>
                    <p className='text-lg font-bold'>${state.serviceCharge}</p>
                </div>
            </div>
            <div className="flex text-2xl justify-between font-bold pt-4">
                <p>Total</p>
                <p>${state.total}</p>
            </div>
        </div>
    )
}

export default TotalPayment