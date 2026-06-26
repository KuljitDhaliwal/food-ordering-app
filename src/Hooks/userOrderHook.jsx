import { useContext, useEffect, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { FinalOrder } from "../Context/finalOrderContext"

export const useOrderHook = () => {
    const [data, setData] = useState({})
    const {state, dispatch} = useContext(FinalOrder)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        try {
            const localData = JSON.parse(localStorage.getItem('Order'))
            console.log("Hook RUn", localData)
            if(localData.table !== null){
                if(localData?.order?.Order_Status === 'confirmed'){
                    setData(localData)
                }else if(localData?.order?.Order_Status === 'completed'){
                    dispatch({type: 'Clear_Order'})
                    navigate('/')
                }
            }else if(location.pathname.includes('/orders')){
                navigate('/orders')
            }else{
                navigate('/')
            }
        } catch (error) {
           console.log(error)
            navigate('/')
        }
    },[dispatch, Navigate])
    console.log('Before Data', data)
    return {data}
}