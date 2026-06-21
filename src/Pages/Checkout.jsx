import React, { useState } from 'react'
import { Theme } from '../Components/UI/Theme'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import Button from '../Components/UI/Button';
import { Dine } from '../StaticData/DineOptions'
import Fork from '../assets/images/icons/fork.png'
import { BsStars } from "react-icons/bs";
import CartInfo from '../Components/CartInfo';
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../Hooks/CartContextHook';
import TotalPayment from '../Components/TotalPayment';

function Checkout() {
    const [dineValue, setDineValue] = useState('dineIn')
    const { state, dispatch } = useCart()
    return (
        <div className={`gap-10 z-10 relative max-w-7xl px-2 m-auto py-10`}>
            {/*  */}
            <div className='flex lg:flex-row flex-col gap-5 lg:h-[calc(100vh-170px)] items-stretch'>
                <div className='lg:w-[60%] flex flex-col w-full'>
                    <div className='flex-1'>
                        <p className='flex items-center gap-1'><FaLongArrowAltLeft className='text-yellow-500' /> Back to Menu</p>
                        <p className='font-semibold text-2xl'>Checkout</p>
                        <p className='text-gray-400 text-sm font-light'>Please review your order and complete the dedails</p>
                        <div className={`p-5 rounded-2xl bg-white w-full mt-4`}>
                            <div className="flex w-full justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="rounded-full p-2 grid inset-0 self-start bg-yellow-500">
                                        <CiViewTable className='text-white' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Table Information</p>
                                        <p className='text-sm text-gray-400 font-extralight'>
                                            Scanned table Information
                                        </p>
                                    </div>
                                </div>
                                <Button children={'Change Table'} className={`${Theme.buttonGradient} rounded-2xl py-3 px-5 cursor-pointer`} />
                            </div>
                            <div className={`border border-gray-400/50 mt-4 rounded-2xl p-5`}>
                                <p className='text-sm text-gray-400 font-light'>Table Number</p>
                                <p className='text-xl font-semibold'>Table 5</p>
                                <p className='text-sm text-gray-400 font-extralight'>If you've moved to a different table, please update</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 items-center mt-4">
                            {Dine.map(item => {
                                let Icon = item.icon
                                return <div className='flex gap-2 justify-between bg-white p-5 items-start w-full rounded-2xl'>
                                    <div className="flex items-center gap-4">
                                        <div className='md:flex hidden'>
                                            {Icon ? <Icon className='text-yellow-300 text-3xl' /> : (<img src={Fork} alt="Fork" className='h-10' />)}
                                        </div>
                                        <div>
                                            <p className='text-xl'>{item.label}</p>
                                            <p className='md:flex hidden text-sm text-gray-400 font-extralight max-w-40'>{item.description}</p>
                                        </div>
                                    </div>
                                    <input type={item.type} name={item.name} checked={item.value === dineValue} value={item.value} onClick={() => setDineValue(item.value)} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='mt-4 lg:flex hidden w-full'>
                        <div className=' md:flex-row flex gap-5 flex-col 
                        justify-between items-center bg-yellow-50/50 p-5 w-full 
                        rounded-2xl shadow-2xl'>
                            <div>
                                <div className='flex md:justify-start justify-center items-start gap-2'>
                                    <BsStars className='text-amber-400 text-2xl' />
                                    <div>
                                        <p className='font-bold'>Almost there!</p>
                                        <p className='text-sm font-semilight text-gray-400'>
                                            Please review your order details and place you order.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button children={<div>
                                <p>Place Order</p>
                                <p className='text-sm text-white font-light'>{dineValue === 'dineIn' ? 'Dine In : Pay After Meal' : 'Takeaway : Pay Now'}</p>
                            </div>} className={`${Theme.buttonGradient} md:w-150 w-full `} />
                        </div>
                    </div>
                </div>
                <div className={`lg:w-[40%] w-full p-5 bg-white rounded-2xl flex flex-col`}>
                    <div>
                        <div className="flex justify-between items-center">
                            <p className='font-bold text-xl'>Order Summary</p>
                        </div>
                        {state.cart.length !== 0 && <p className='text-gray-400'>{state.cart.length} Items</p>}
                        <hr className='text-gray-200 mt-2' />
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <CartInfo />
                    </div>
                    <TotalPayment />
                </div>
            </div>
            <div className='mt-4 lg:hidden flex'>
                <div className=' md:flex-row flex gap-5 flex-col 
                justify-between items-center bg-yellow-50/50 p-5 
                rounded-2xl shadow-2xl w-full'>
                    <div>
                        <div className='flex md:justify-start justify-center items-center gap-2'>
                            <BsStars className='text-amber-400' />
                            <p className='font-bold'>Almost there!</p>
                        </div>
                        <p className='text-sm font-semilight text-gray-400'>
                            Please review your order details and place you order.
                        </p>
                    </div>
                    <Button children={<div>
                        <p>Place Order</p>
                        <p className='text-sm text-white font-light'>{dineValue === 'dineIn' ? 'Dine In : Pay After Meal' : 'Takeaway : Pay Now'}</p>
                    </div>} className={`${Theme.buttonGradient} md:w-auto w-full`} />
                </div>
            </div>
        </div>
    )
}

export default Checkout