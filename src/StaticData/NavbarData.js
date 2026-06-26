import { IoMdHome } from "react-icons/io";
import { MdDiscount } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

export const NavbarData = [
    {
        route: '/',
        name: 'Home',
        icon: IoMdHome
    },
    {
        route: '/deals',
        name: 'Deals',
        icon: MdDiscount
    },
    {
        route: '/orders',
        name: 'Orders',
        icon: FaClipboardList
    }
]