    import React from 'react'
import Logo from '../assets/images/logo.avif'
import { restaurantDetails } from '../StaticData/RestaurantData'
function RestaurantInfo() {
    return (
        <div className='grid gap-4 bg-white rounded-2xl shadow p-5'>
            <div className="flex items-start gap-2">
                <img src={Logo} alt="Logo" className='h-13' />
                <div>
                    <p className='text-2xl text-amber-700'>RiseView Restaurant</p>
                    <p className='text-gray-400 text-sm'>Good food, great memories</p>
                </div>
            </div>
            <hr className='text-gray-400 h-0.5 w-full'/>
            <div className='grid gap-3'>
                {restaurantDetails.map((item, key)=>{
                    return <div key={key} className='flex items-start justify-between'>
                        <div className='flex gap-3 items-center'>
                            <p>{item.icon}</p>
                            <p className='text-lg'>{item.title}</p>
                        </div>
                        <div className='text-gray-400 text-right'>{item.value}</div>
                    </div>  
                })}
            </div>
        </div>
    )
}

export default RestaurantInfo