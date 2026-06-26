import React, { useContext, useEffect } from 'react'
import { FinalOrder } from '../Context/finalOrderContext'
import OrderDetails from '../Components/OrderDetails'
import { CiViewList, CiClock2 } from "react-icons/ci";
import { PiDeskLight, PiForkKnife } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";
import { GiRiceCooker } from "react-icons/gi";
import { IoMdDoneAll } from "react-icons/io";
import Cooking from '../assets/images/cooking.webp'
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../Components/UI/Button';
import { Theme } from '../Components/UI/Theme';
import { MdSupportAgent } from "react-icons/md";
import { useOrderHook } from '../Hooks/userOrderHook';
import RestaurantInfo from '../Components/RestaurantInfo';
import Entry from '../Components/Entry';
function Orders() {
  const { data } = useOrderHook()
  const navigate = useNavigate()
  const localData = JSON.parse(localStorage.getItem('Order')) || {}
  console.log('LocalData', localData)
  if(!localData.order){
    return <Entry/>
  }
  return (
    <div className='max-w-7xl px-2 m-auto min-h-[calc(100vh - 120px)] py-10 relative z-10'>
      <div className='md:mt-10 mt-5'>
        <p className='text-amber-700 font-bold text-2xl text-center'>Order Tracking</p>
        <p className='text-center text-gray-400'>Track your order in real time</p>
        <div className='mt-8'>
          <OrderDetails state={data} />
          {console.log('Data', data)}
        </div>
        <div className='flex md:flex-row flex-col gap-4 w-full justify-between md:items-center items-start mt-10'>
          <div className='flex justify-between p-2 md:shadow-none shadow rounded-xl items-center w-full'>
            <div className="card md:block flex gap-2 shrink-0">
              <div className="rounded-full p-3 w-fit bg-amber-400 m-auto">
                <CiViewList />
              </div>
              <div>
                <p className='font-bold md:text-center md:text-lg  my-1'>Order Placed</p>
                <p className='text-amber-700 md:text-center md:text-md text-[14px]'>12:12 PM</p>
              </div>
            </div>
            <div className="rounded-full  w-7 md:hidden grid place-items-center h-7 bg-green-500">
              <FaCheck />
            </div>
          </div>
            <span className='md:flex hidden bg-linear-90 from-yellow-100 via-yellow-500 to-yellow-100 h-0.5 w-full'></span>
          <div className='flex justify-between p-2 md:shadow-none shadow rounded-xl items-center w-full'>

            <div className="card md:block flex gap-2 shrink-0">
              <div className="rounded-full p-3 w-fit bg-amber-400 m-auto">
                <FaCheck />
              </div>
              <div>
                <p className='font-bold md:text-center md:text-lg  my-1'>Order Confirmed</p>
                <p className='text-amber-700 md:text-center md:text-md text-[14px]'>12:14 PM</p>
              </div>
            </div>
            <div className="rounded-full  w-7 md:hidden grid place-items-center h-7 bg-green-500">
              <FaCheck />
            </div>
          </div>
            <span className='md:flex hidden bg-linear-90 from-yellow-100 via-yellow-500 to-yellow-100 h-0.5 w-full'></span>
          <div className='flex justify-between p-2 md:shadow-none shadow rounded-xl items-center w-full'>

            <div className="card md:block flex gap-2 shrink-0">
              <div className="rounded-full p-3 w-fit bg-amber-400 m-auto">
                <GiCampCookingPot />
              </div>
              <div>
                <p className='font-bold md:text-center md:text-lg  my-1'>Preparing</p>
                <p className='text-amber-700 md:text-center md:text-md text-[14px]'>12:16 PM</p>
              </div>

            </div>
            <div className="rounded-full  w-fit md:hidden grid place-items-center py-1 px-2 text-amber-700 bg-yellow-400">
              <p>In Progress</p>
            </div>
          </div>
            <span className='md:flex hidden bg-linear-90 from-gray-100 via-gray-500 to-gray-100 h-0.5 w-full'></span>
          <div className='flex justify-between p-2 md:shadow-none shadow rounded-xl items-center w-full'>

            <div className="card md:block flex gap-2 shrink-0">
              <div className="rounded-full p-3 w-fit bg-gray-200 m-auto">
                <GiRiceCooker />
              </div>
              <div>
                <p className='font-bold md:text-center md:text-lg md: my-1'>Ready</p>
                <p className='text-amber-700 md:text-center md:text-md text-[14px]'>---</p>
              </div>
            </div>
            <div className="rounded-full  w-fit md:hidden grid place-items-center py-1 px-2 text-white bg-gray-400">
              <p>Pending</p>
            </div>
          </div>
            <span className='md:flex hidden bg-linear-90 from-gray-100 via-gray-500 to-gray-100 h-0.5 w-full'></span>
          <div className='flex justify-between p-2 md:shadow-none shadow rounded-xl items-center w-full'>
            <div className="card md:block flex gap-2 shrink-0">
              <div className="rounded-full p-3 w-fit bg-gray-200 m-auto">
                <IoMdDoneAll />
              </div>
              <div>
                <p className='font-bold md:text-center md:text-lg  my-1'>Completed</p>
                <p className='text-amber-700 md:text-center md:text-md text-[14px]'>---</p>
              </div>
            </div>
            <div className="rounded-full  w-fit md:hidden grid place-items-center py-1 px-2 text-white bg-gray-400">
              <p>Pending</p>
            </div>
          </div>
        </div>

        <div className='shadow bg-white p-5 grid gap-4 md:grid-cols-3 grid-cols-[1fr_2fr] rounded-2xl mt-8 items-center justify-between'>
          <img src={Cooking} alt="Cooking Pan" className='md:h-full h-15' />
          <div className='flex flex-col gap-2'>
            <p className='p-2 px-3 bg-yellow-100 text-amber-700 w-fit rounded-lg'>PREPARING</p>
            <p>Your order is being prepared!</p>
            <p className='text-sm text-gray-400 font-light'>
              Our chef is preparing your delicius food. It will be ready soon.
            </p>
          </div>
          <div className='flex flex-col md:items-start items-center md:col-span-1 col-span-2 gap-2 md:border-l md:border-t-0 border-t  md:pl-5 py-4 border-gray-400/50'>
            <p className='text-sm text-gray-400 font-light'>
              Estimated Time
            </p>
            <div className="flex gap-2 text-amber-700 text-xl">
              <CiClock2 />
              15-20 min
            </div>
            <p className='text-sm text-gray-400 font-light'>
              Thank you for your patience.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mt-4 items-start">
          <div className='bg-white p-5 rounded-2xl shadow'>
            <p className='text-amber-700 font-bold'>Order Details</p>
            <div className='grid gap-3'>
              {data?.order?.Dishes && data?.order?.Dishes.map((item, key) => {
                return <div key={key} className='bg-gray-50 rounded-2xl p-4 flex justify-between'>
                  <div className='flex flex-1 gap-3 items-stretch'>
                    <img src={item.strMealThumb} alt="Meal Image" className='h-20 w-20 rounded-2xl' />
                    <div className='flex-1'>
                      <div className="flex justify-between items-center">
                        <p className='md:text-xl font-bold'>{item.strMeal}</p>
                        <p className='md:text-xl font-bold'>${item.mealPrice}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        {item.note && (<p>{item.note}</p>)}
                        <p className='p-1 bg-gray-200 text-sm px-2 rounded-lg'>Qty:- {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          <RestaurantInfo />
        </div>

        <div className="mt-4 shadow flex md:flex-row flex-col gap-4 items-center justify-between bg-yellow-100 p-5 rounded-2xl">
          <div>
            <div className='flex items-start'>
              <MdSupportAgent className='text-amber-700 text-4xl gap-3' />
              <div>
                <p>Need help with your order?</p>
                <p className='text-gray-400 text-sm'>Our support team is here to help you.</p>
              </div>
            </div>
          </div>
          <Button children={'Contact Support'} className={`${Theme.buttonGradient} shrink-0`} />
        </div>
      </div>
    </div>
  )
}

export default Orders