import { useContext, useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import Button from '../Components/UI/Button';
import { Theme } from '../Components/UI/Theme';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../Hooks/CartContextHook';
import { FinalOrder } from '../Context/finalOrderContext';
import OrderDetails from '../Components/OrderDetails';
import { useOrderHook } from '../Hooks/userOrderHook';

function OrderSuccess() {
    const navigate = useNavigate()
    const {data} = useOrderHook()
    return (
        <div className='max-w-7xl m-auto h-[calc(100vh-130px)] z-10 relative px-2 '>
            <div className='bg-white shadow grid gap-2 md:mt-10 mt-5 rounded-2xl p-5 text-center'>
                <div className="rounded-full m-auto bg-yellow-100 p-2 w-15 grid place-items-center h-15 shadow">
                    <FaCheck className='text-2xl text-yellow-900' />
                </div>
                <p className='text-yellow-800 text-2xl font-bold'>
                    Order Places Successfully!
                </p>
                <div>
                    <p className='text-gray-400 text-sm font-light'>
                        Thank you for dining with us.
                    </p>
                    <p className='text-gray-400 text-sm font-light'>
                        We've received your order and
                        it is being prepared
                    </p>
                </div>
                {data?.order && <OrderDetails state={data}/>}
                <div className="flex gap-4 items-center justify-center mt-4">
                    <Button onClick={()=> navigate('/orders')} className={`bg-white border border-yellow-500 text-yellow-500 cursor-pointer`} children={'View Order'} />
                    <Button onClick={() => navigate('/')} className={`${Theme.buttonGradient} cursor-pointer`} children={'Back to Home'} />
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess