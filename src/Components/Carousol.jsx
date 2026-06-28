import React, { useEffect, useRef, useState } from 'react'
import { Dishes } from '../StaticData/DishDetails'
import '../App.css'
function Carousol() {
    const imgRef = useRef([])
    const [active, setActive] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const total = imgRef.current.length
        imgRef.current.forEach((item, index) => {
            const angle = (360 / total) * index
            item.style.transform = ` rotate(${angle}deg) translate(var(--radius)) rotate(-${angle}deg)`
            item.style.transformOrigin = 'center center'
        })
    },[Dishes.length])

    const handleImg = () => {
        setTimeout(() => {
            let num = count < 5 ? count + 1 : 0
            setCount(num)
        }, 3000)
    }

    useEffect(() => {
        handleImg()
    }, [count])
    return (
        <div className='relative'>
            {console.log('Count', count)}
            <div className='lg:w-120 lg:h-120 md:w-90 md:h-90 w-40 h-40 bg-amber-100 ease-in-out grid place-items-center relative rounded-full animate-spin transition-transform [animation-duration:100s]'>
                {Dishes.map((item, key) => {
                    return <img src={item.img}
                        ref={(el) => imgRef.current[key] = el} alt={`${item}${key}`}
                        key={key} className={`${key === count ? 'border-yellow-600' : 'border-transparent'} border-4 rounded-full circle-item absolute lg:h-30 h-20 cursor-pointer transition-all duration-700`} />
                })}
            </div>
            <div className='absolute inset-0 grid place-items-center p-20'>
                <div className='p-20'>
                    {Dishes.map((item, key) => {
                        return <img src={item.img}
                            alt={`${item}${key}`}
                            key={key} className={`absolute ${key === count ? 'opacity-100' : 'opacity-0'}  inset-0 lg:h-70 md:h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all [animation-duration:800ms] object-cover cursor-pointer`} />
                    })}
                    {/* <img src={Dishes[count].img} alt="Dish" className='h-full w-full object-cover transition-all [animation-duration:800ms]' /> */}
                </div>
            </div>
        </div>
    )
}

export default Carousol