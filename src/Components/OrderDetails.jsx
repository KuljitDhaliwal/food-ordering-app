import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { CiViewList, CiClock2 } from "react-icons/ci";
import { PiDeskLight, PiForkKnife } from "react-icons/pi";

function OrderDetails({state}) {
    return (
        <div className="grid md:grid-cols-4 items-strech grid-cols-2 gap-2  justify-center">
            <div className="card md:py-10 py-5 bg-white shadow rounded-lg p-2 text-center">
                <div className="rounded-full p-2 shadow my-2 bg-yellow-100 m-auto w-fit">
                    <CiViewList className='text-2xl'/>
                </div>
                <p className='text-gray-400 text-sm font-lingh'>Order ID</p>
                <p className='text-yellow-800 text-lg'>{state?.order?.OrderId}</p>
            </div>
            <div className="card md:py-10 py-5 bg-white shadow rounded-lg p-2 text-center">
                <div className="rounded-full p-2 shadow my-2 bg-yellow-100 m-auto w-fit">
                    <CiClock2 className='text-2xl'/>
                </div>
                <p className='text-gray-400 text-sm font-lingh'>Order Time</p>
                <p className='text-yellow-800 text-lg'>12:12PM</p>
            </div>
            <div className="card md:py-10 py-5  bg-white shadow rounded-lg p-2 text-center">
                <div className="rounded-full p-2 shadow my-2 bg-yellow-100 m-auto w-fit">
                    <PiDeskLight className='text-2xl'/>
                </div>
                <p className='text-gray-400 text-sm font-lingh'>Table No.</p>
                <p className='text-yellow-800 text-lg'>{state?.order?.Table_Number}</p>
            </div>
            <div className="card md:py-10 py-5 bg-white shadow rounded-lg p-2 text-center">
                <div className="rounded-full p-2  shadow my-2 bg-yellow-100 m-auto w-fit">
                    <PiForkKnife className='text-2xl'/>
                </div>
                <p className='text-gray-400 text-sm font-lingh'>Order Type</p>
                <p className='text-yellow-800 text-lg'>{state?.order?.Order_type === 'dineIn' ? 'Dine In' : 'Take Away'}</p>
            </div>
        </div>
    )
}

export default OrderDetails