import { createContext, useReducer, useState } from "react";
export const CartContext = createContext()

    const initialData = {
        cart: [],
        toggleCart: false,
        total: 0,
        quantity: 1,
        serviceCharge: 0,
        subTotal: 0
    }

    function cartReducer(state, action){
        switch(action.type){
            case "Add_To_Cart": 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

            case "Remove_From_Cart":
            const newData = state.cart.filter(el => el.idMeal !== action.payload.idMeal)
            return {
                ...state,
                cart: newData
            }

            case "Open_Cart":
            return {
                ...state,
                toggleCart: true
            }

            case "Close_Cart":
            return {
                ...state,
                toggleCart: false
            }

            case 'Item_Quantity_Increase':
                console.log("Reducer fired", action.payload)

            return {
                ...state,
                cart: state.cart.map(el => (
                    el.idMeal === action.payload.idMeal ? action.payload : el
                ))
            }
            case 'Item_Quantity_Decrease':
            return {
                ...state,
                cart: state.cart.map(el=> (
                    el.idMeal === action.payload.idMeal ? action.payload : el
                ))
            }

            case "Cart_Total":
                let arr = []
                let serviceTax = 3
            state.cart.map((el)=> arr.push(el.mealPrice * el.quantity))
            const total = arr.reduce((accumulater, current)=>{
                return accumulater + current
            },0)
            const service =  Number((total * (serviceTax / 100)).toFixed(2));
            return {
                ...state,
                total: total,
                subTotal: service + total,
                serviceCharge: service
            }


            case "Add_Note":
            return {
                ...state,
                cart: state.cart.map(el=> el.idMeal in action.payload ? {...el, ['note']: action.payload[el.idMeal] } : el)  
            }


            default:
            return state
        }
    }

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialData)
    return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
}






    
    
    



