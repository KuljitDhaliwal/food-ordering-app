import React from 'react'
import Button from './UI/Button'
import { Theme } from './UI/Theme'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../Hooks/CartContextHook'
import { FaTimes, FaTrash } from 'react-icons/fa'
import Counter from './Counter'

function CartInfo() {
    const navigate = useNavigate()
    const { state, dispatch } = useCart()
    const location = useLocation()
    const handleInstructions = (e) => {
        const newObj = { [e.target.name]: e.target.value }
        dispatch({
            type: 'Add_Note',
            payload: newObj
        })
    }


    //Increase Quantity
    const handleIncreaseQunatity = (item) => {
        const increase = { ...item, ['quantity']: item.quantity + 1 }
        console.log("Clicked +", increase)
        dispatch({
            type: 'Item_Quantity_Increase',
            payload: increase
        })
    }

    //Decrease Quantity
    const handleDecreaseQuantity = (item) => {
        const decrease = { ...item, ['quantity']: item.quantity - 1 }
        dispatch({
            type: 'Item_Quantity_Decrease',
            payload: decrease
        })
    }


    return (
        <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
            <div className='flex-1 overflow-y-auto h-full pr-1'>
                <div className='grid gap-2 mt-4'>
                    {state.cart.map((item, key) => {
                        return <div key={key} className='bg-gray-50 rounded-2xl p-4 flex justify-between'>
                            <div className='flex flex-1 gap-3 items-stretch'>
                                <img src={item.strMealThumb} alt="Meal Image" className='h-20 w-20 rounded-2xl' />
                                <div className='flex-1'>
                                    <div className="flex justify-between items-center">
                                        <p className='text-xl font-bold'>{item.strMeal}</p>
                                        {location.pathname !== '/menu' && (
                                            <p className='text-xl font-bold'>${item.mealPrice}</p>
                                        )}
                                    </div>
                                    {location.pathname !== '/menu' && (
                                        <div className="flex justify-between items-center mt-2">
                                            {item.note && (<p>{item.note}</p>)}
                                            <p className='p-1 bg-gray-200 text-sm px-2 rounded-lg'>Qty:- {item.quantity}</p>
                                        </div>
                                    )}
                                    {location.pathname === '/menu' &&
                                        <p className='text-xl font-bold'>${item.mealPrice}</p>
                                    }
                                    {item.note && <p>Note:- {item.note}</p>}
                                    {location.pathname === '/menu' &&
                                        (
                                            <Counter increased={() => handleIncreaseQunatity(item)} decreased={() => handleDecreaseQuantity(item)} item={item} />
                                        )
                                    }
                                    {location.pathname === '/menu' &&

                                        <input type="text" name={item.idMeal} placeholder='Speacl Instruction..?'
                                            onChange={(e) => handleInstructions(e)} value={item.note ? item.note : ''}
                                            className='border border-gray-400/50 p-2 px-3 w-full rounded-2xl mt-2' />
                                    }
                                </div>
                            </div>
                            {location.pathname === '/menu' &&
                                <FaTrash className='cursor-pointer text-red-500' onClick={() => dispatch({ type: 'Remove_From_Cart', payload: item })} />
                            }
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartInfo