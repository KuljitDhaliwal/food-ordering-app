import { createContext, useReducer } from "react";

export const FinalOrder = createContext()
const initialData = {
    order: {}
}


const reducers = (state, action) => {
    switch (action.type){
        case "Final_Order":
            return {
                ...state,
                order:  action.payload
        }

        case "Clear_Order":
        return initialData
    }
}

export const FinalOrderProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducers, initialData)
    return <FinalOrder.Provider value={{state, dispatch}}>{children}</FinalOrder.Provider>
}