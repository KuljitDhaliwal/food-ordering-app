import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { NavbarData } from '../StaticData/NavbarData'
import { NavLink } from 'react-router-dom'
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Theme } from './UI/Theme';
import CartIcon from './CartIcon';
import { useCart } from '../Hooks/CartContextHook';


function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false)
    const {dispatch} = useCart()
    return (
        <nav className='border-gray-400/50 border-b relative z-20'>
            <div className='h-22 m-auto flex justify-between items-center max-w-7xl relative px-2'>
                <img src={Logo} alt="Logo" className='h-30 cursor-pointer' />
                <div className={`${openNavbar ? 'block' : 'md:block hidden'} md:rounded-4xl p-2 border 
                border-gray-400/50 md:relative absolute
                md:top-0 top-22 md:w-auto w-full left-0 md:h-auto h-screen md:bg-linear-180 md:from-white md:to-white bg-linear-180 from-yellow-50 to-yellow-100`}>
                    <div className='md:flex grid md:text-start text-center gap-6'>
                        {NavbarData.map((route, key) => {
                            return <NavLink to={route.route}
                                onClick={()=>setOpenNavbar(false)} key={key}
                                className={({ isActive }) => `${isActive ? 
                                    'bg-linear-180 shadow-2xs from-yellow-400 to-yellow-500 text-white rounded-4xl' : 
                                    ''} 
                    text-xl md:py-2 py-4 px-6 hover:bg-yellow-100 rounded-4xl`}>
                                {route.name}
                            </NavLink>
                        })}
                    </div>
                </div>

                <div className='flex md:gap-4 gap-2'>
                    <div className="rounded-xl
                 w-10 h-10 p-2 border grid place-items-center
                 border-gray-400/50 cursor-pointer">
                        <FaBell className='text-lg' />
                    </div>

                    <CartIcon className={`rounded-xl
                 w-10 h-10 p-2 border
                 border-gray-400/50 cursor-pointer`}/>
                    <div className="rounded-xl
                 w-10 h-10 overflow-hidden border grid place-items-center
                 border-gray-400/50 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" className='h-full w-full' />
                    </div>


                    {/* HamBurger */}
                    <div className="rounded-xl md:hidden grid
                 w-10 h-10 overflow-hidden border place-items-center
                 border-gray-400/50 cursor-pointer" onClick={()=>setOpenNavbar(!openNavbar)}>
                    {openNavbar ? <FaTimes className='text-xl' /> 
                    : <GiHamburgerMenu className='text-xl'/>}  
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar