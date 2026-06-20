import React from 'react'

function Card() {
  return (
    <div className='grid grid-cols-[1fr_2fr] max-w-100 gap-2'>
        <div className="w-full rounded-full p-2 shadow-2xl
        bg-linear-180 from-yellow-500 to-yellow-600 relative">
            {/* <img src="" alt="" className='absolute inset-0 h-full w-full'/> */}
        </div>
        <div>
            <p className='p-4 -ml-12 rounded-r-3xl text-center bg-linear-180 from-yellow-500/60 to-yellow-600/60'>Burger</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illo magnam animi fuga omnis sapiente perferendis, quisquam ullam error 
                deleniti cupiditate!
            </p>
        </div>
    </div>
  )
}

export default Card