import React, { useEffect } from 'react'
import { useFetchAPI } from '../Hooks/FetchAPI';
import FoodDish from '../assets/images/yellow.png'
import Button from '../Components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Components/UI/Theme';
function Home() {
    const navigate = useNavigate()
  return (
    <div className='max-w-7xl 
     m-auto py-10 px-2 relative z-10'>
        <div className={`rounded-4xl  ${Theme.backDivGradient}
        grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 min-h-[calc(100vh-168px)] overflow-hidden items-stretch`}>
            
            <div className="left lg:p-10 p-4">
                <div className="rounded-3xl lg:p-5 p-3 flex md:w-fit items-center gap-4 bg-white/50">
                    <div className='relative'>
                        <div className="bg-red-600 p-1 w-fit rounded-full"></div>
                        <div className="bg-red-500 rounded-full p-2 absolute 
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        animate-ping [animation-duration:2s]">
                        </div>
                    </div>
                    <p className='text-xl'>Premium Dining with RiseView</p>
                </div>
                <p className='mont-font mt-4 text-amber-900 font-semibold lg:text-7xl text-4xl md:text-start text-center'>
                    Warm plates, 
                    golden hours, 
                    unforgettable evenings.
                </p>
                <p className='md:text-start text-center mt-3 md:flex hidden max-w-120'>
                    RiseView Restaurant blends charcoal-fired cooking,
                     elegant seasonal menus, and a glowing dining room made 
                     for celebrations, client dinners, and slow Sunday meals.
                </p>
                <p className='md:text-start text-center mt-3 md:hidden flex'>
                    Charcoal-fired cuisine, seasonal dishes, 
                    and a warm space for every occasion.
                </p>
                <Button children={`Explore Menu`} 
                className={`bg-linear-180 my-4 shadow-xl block 
                md:mx-0 m-auto from-yellow-400 to-yellow-500`}
                onClick={()=> navigate('/menu')}
                />
            </div>
            <div className="right bg-red-50 h-full relative">
                <img src={FoodDish} alt="Food Dish Image" className='h-full w-full object-cover inset-0 absolute'/>
            </div>
        </div>
    </div>
  )
}

export default Home