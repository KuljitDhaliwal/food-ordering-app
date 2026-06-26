import React from 'react'
import EntryImg from '../assets/images/entry.png'
import Button from './UI/Button'
import { Theme } from './UI/Theme'
import { BsForkKnife } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
function Entry() {
    const navigate = useNavigate()
    return (
        <div className='min-h-[calc(100vh-130px)] relative z-10 max-w-7xl m-auto'>
            <div className='mt-10'>
                <img src={EntryImg} alt="Entry Image" className='h-60 m-auto'/>
                <p className='font-bold text-amber-700 text-3xl text-center mt-4'>No order yet!</p>
                <p className='text-gray-400 text-center my-2'>Looks like you haven't placed any orders yet. <br />
                Explore our menu and place your first order.</p>
                <div className='grid place-items-center mt-4'>
                    <Button onClick={()=> navigate('/')} children={<div className='flex items-center gap-2'>
                        <BsForkKnife className='text-xl'/>
                        <p>Expore Menu</p>
                    </div>} className={`${Theme.buttonGradient} cursor-pointer w-fit m-auto `}/>
                </div>
            </div>
        </div>
    )
}

export default Entry