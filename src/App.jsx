import React from 'react'
import PublicLayout from './Layout/PublicLayout'
import Index from './Routes'
import Cart from './Components/Cart'

function App() {
  return (
    <div className='bg-white/50 relative overflow-x-hidden'>
      <div className="absolute bg-yellow-400 w-100 h-50 
      rounded-full right-0 top-10 blur-[200px] "></div>
      <div className="absolute bg-yellow-800 w-100 h-50 
      rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
      <div className="absolute bg-orange-400 w-100 h-50 
      rounded-full left-0 bottom-10 blur-[200px]"></div>
      <div className="absolute bg-orange-400 w-30 h-50 
      rounded-full top-0 left-10 blur-[200px]"></div>
      <Index/>
      <Cart/>
    </div>
  )
}

export default App