import React, { useEffect } from 'react'
import { useFetchAPI } from '../Hooks/FetchAPI';
import FoodDish from '../assets/images/dish.png'
import Leaf from '../assets/images/leaf.webp'
import Button from '../Components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Components/UI/Theme';
import { BsForkKnife } from 'react-icons/bs';
function Home() {
    const navigate = useNavigate()
  return (
    <div className='max-w-7xl 
     m-auto py-10 px-2 relative z-10'>
        <div className={`rounded-4xl min-h-[calc(100vh-168px)]  ${Theme.backDivGradient}
        grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 overflow-hidden items-stretch`}>
            
            <div className="left lg:p-10 p-4">
                <div className="rounded-3xl lg:p-5 p-3 flex md:ml-0 m-auto text-amber-700 w-fit items-center gap-2 bg-yellow-200/50">
                    <BsForkKnife/>
                    <p className='text-xl'>Best Food - Best Memories</p>
                </div>
                <div className='my-7'>
                    <p className='mont-font mt-4 text-amber-900 font-semibold lg:text-6xl text-4xl md:text-start text-center'>
                        Warm plates, 
                        golden hours, 
                        unforgettable evenings.
                    </p>
                    <p className='md:text-start text-center mt-3 md:flex hidden max-w-150'>
                        RiseView Restaurant blends charcoal-fired cooking,
                        elegant seasonal menus, and a glowing dining room made 
                        for celebrations, client dinners, and slow Sunday meals.
                    </p>
                </div>
                <p className='md:text-start leading-7 text-center mt-3 md:hidden flex'>
                    Charcoal-fired cuisine, seasonal dishes, 
                    and a warm space for every occasion.
                </p>
                <div className="flex gap-4 md:justify-start justify-center">
                    <Button children={`Explore Menu`} 
                    className={`bg-linear-180 my-4 shadow-xl block 
                    md:mx-0 from-yellow-400 to-yellow-500 cursor-pointer`}
                    onClick={()=> navigate('/menu')}
                    />
                    <Button children={`How it works`} 
                    className={`bg-linear-180 my-4 shadow-xl block 
                     from-amber-700 to-amber-800 text-white cursor-pointer`}
                    onClick={()=> navigate('/guide')}
                    />

                </div>
            </div>
            <div className="right h-full relative">
                <img src={Leaf} alt="Leaf" className='absolute h-100'/>
                <img src={Leaf} alt="Leaf" className='absolute h-100 right-0'/>
                <img src={Leaf} alt="Leaf" className='absolute h-10 z-10'/>
                <img src={Leaf} alt="Leaf" className='absolute bottom-10 right-3 h-10 z-10'/>
                <img src={Leaf} alt="Leaf" className='absolute bottom-10 right-50 h-10 z-10'/>
                <img src={Leaf} alt="Leaf" className='absolute h-100'/>
                <img src={FoodDish} alt="Food Dish Image" className='object-cover hover:rotate-5 transition-all duration-300 inset-0 absolute'/>
            </div>
        </div>
    </div>
  )
}

export default Home