import { useContext } from "react"
import { CartContext } from "../Context/cartContext"

export const useCart = ()=>{
    return useContext(CartContext)
}