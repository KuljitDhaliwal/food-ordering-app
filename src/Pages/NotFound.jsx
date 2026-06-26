import React from 'react'
import Button from '../Components/UI/Button'
import { Theme } from '../Components/UI/Theme'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='grid place-items-center relative z-10 md:mt-10 mt-5'>
        <div className='text-center'>
            <p className='md:text-8xl text-3xl text-amber-700'>404</p>
            <p className='md:text-8xl text-3xl text-amber-700'>ERROR</p>
            <div className="flex">
                <Button onClick={()=>navigate('/')} className={`${Theme.buttonGradient} cursor-pointer m-auto`} children={'Go Home'}/>
            </div>
        </div>
    </div>
  )
}

export default NotFound