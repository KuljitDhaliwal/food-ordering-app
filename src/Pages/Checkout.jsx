import { useContext, useEffect, useRef, useState } from 'react'
import { Theme } from '../Components/UI/Theme'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import Button from '../Components/UI/Button';
import { Dine } from '../StaticData/DineOptions'
import Fork from '../assets/images/icons/fork.png'
import { BsStars } from "react-icons/bs";
import CartInfo from '../Components/CartInfo';
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../Hooks/CartContextHook';
import TotalPayment from '../Components/TotalPayment';
import { Navigate, useNavigate } from 'react-router-dom';
import { FinalOrder } from '../Context/finalOrderContext';
import Table from '../assets/images/table.webp'
function Checkout() {
    const [dineValue, setDineValue] = useState('dineIn')
    const { state: cartState, dispatch: cartDispatch } = useCart()
    const { state: finalOrderState, dispatch: finalOrderDispatch } = useContext(FinalOrder)
    const tableRef = useRef()
    const dineRef = useRef([])
    const [table, setTable] = useState(false)
    const [tableNumber, setTableNumber] = useState(null)
    const navigate = useNavigate()

    const handleTable = () => {
        setTable(true)
        setTimeout(() => {
            tableRef.current.focus()
        }, 0)
    }

    useEffect(() => {
        if (cartState.table !== null) {
            setTableNumber(cartState.table)
        }
    }, [])



    const handleOrder = () => {
        if(tableNumber === undefined || tableNumber === null)return
        const orderTime = new Date()
        let data = {
            'Dishes': cartState.cart,
            'Table_Number': tableNumber,
            'OrderDate': orderTime,
            'OrderId': Date.now(),
            'Order_type': dineValue,
            'Order_Status': 'confirmed'
        }
        finalOrderDispatch({
            type: 'Final_Order',
            payload: data
        })
        localStorage.setItem('Order', JSON.stringify({ order: data }))
        navigate('/order-success')
        cartDispatch({
            type: 'Clear_Cart'
        })
        localStorage.removeItem('Cart')
    }

    useEffect(() => {
        if (cartState?.cart?.length === 0) {
            navigate('/')
        }
    }, [])

    const handleSetCat = (key, val) => {
        setDineValue(val)
        dineRef.current[key].checked
    }

    return (
        <div className={`gap-10 z-10 relative max-w-7xl px-2 m-auto py-10`}>
            <div className='flex lg:flex-row flex-col gap-5 lg:h-[calc(100vh-170px)] items-stretch'>
                <div className='lg:w-[60%] flex flex-col w-full'>
                    <div className='flex-1'>
                        <p className='flex items-center gap-1 cursor-pointer w-fit' onClick={()=> navigate('/menu')}><FaLongArrowAltLeft className='text-yellow-500' /> Back to Menu</p>
                        <p className='font-semibold text-2xl mt-2'>Checkout</p>
                        <p className='text-gray-400 text-sm font-light'>Please review your order and complete the dedails</p>
                        <div className={`p-5 rounded-2xl bg-white w-full mt-4 shadow`}>
                            <div className="flex w-full justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="rounded-full p-2 grid inset-0 self-start bg-yellow-500">
                                        <CiViewTable className='text-white' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Table Information</p>
                                        <p className='text-sm text-gray-400 font-extralight'>
                                            {tableNumber === null ? 'Please enter your table number' : 'Scanned table Information'}
                                        </p>
                                    </div>
                                </div>
                                {
                                    !table || tableNumber !== null && <Button children={'Change Table'} onClick={() => handleTable()} className={`${Theme.buttonGradient} rounded-2xl py-3 px-5 cursor-pointer`} />
                                }

                            </div>
                            {(table || tableNumber === null || table !== null) && (
                                <div className='flex gap-2 items-center mt-4'>
                                    <p className='font-semibold shrink-0 self-center'>Table No.</p>
                                    <input type="number" min={1} name="table-number" id="table-number"
                                        value={tableNumber} ref={tableRef} onFocus={(e) => e.target.select()}
                                        onChange={(e) => setTableNumber(e.target.value === "" ? null : e.target.value )}
                                        className='border border-gray-400/50 w-full p-2 rounded-2xl px-4'
                                        placeholder='Please enter your table number ' />
                                </div>
                            )}
                            <div className={`border border-gray-400/50 mt-4 rounded-2xl p-5`}>
                                {tableNumber !== null && tableNumber > 0 ? (<div>
                                    <p className='text-sm text-gray-400 font-light'>Table Number</p>
                                    <p className='text-xl font-semibold'>Table {tableNumber}</p>
                                    <p className='text-sm text-gray-400 font-extralight'>If you've moved to a different table, please update</p>
                                </div>) : (
                                    <div className='flex gap-2'>
                                        <img src={Table} alt="Table" className='h-30'/>
                                        <div>
                                            <p className='text-2xl'>Please enter your <br /> <span className='text-amber-700'>table number</span> to book an order</p>
                                            <p className='text-sm text-gray-400 font-extralight'>
                                                Enter your table number to get started and place your order.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 items-center mt-4">
                            {Dine.map((item, key) => {
                                let Icon = item.icon
                                return <div key={key} onClick={() => handleSetCat(key, item.value)} className={`flex gap-2 justify-between cursor-pointer shadow ${dineValue === item.value ? 'bg-yellow-200 border border-yellow-500' : 'bg-white'} p-5 items-start w-full rounded-2xl`}>
                                    <div className="flex items-center gap-4">
                                        <div className='md:flex hidden'>
                                            {Icon ? <Icon className='text-yellow-300 text-3xl' /> : (<img src={Fork} alt="Fork" className='h-10' />)}
                                        </div>
                                        <div>
                                            <p className='text-xl'>{item.label}</p>
                                            <p className='md:flex hidden text-sm text-gray-400 font-extralight max-w-40'>{item.description}</p>
                                        </div>
                                    </div>
                                    <input type={item.type} ref={(el) => dineRef.current[key] = el} name={item.name} onChange={(e) => setDineValue(e.target.value)} checked={item.value === dineValue} value={item.value} onClick={() => setDineValue(item.value)} />
                                </div>
                            })}
                        </div>
                        {console.log('Checkout table', cartState)}
                    </div>
                    <div className='mt-4 lg:flex hidden w-full'>
                        <div className=' md:flex-row flex gap-5 flex-col 
                        justify-between items-center bg-white p-5 w-full 
                        rounded-xl shadow'>
                            <div>
                                <div className='flex md:justify-start justify-center items-start gap-2'>
                                    <BsStars className='text-amber-400 text-2xl' />
                                    <div>
                                        <p className='font-bold'>Almost there!</p>
                                        <p className='text-sm font-semilight text-gray-400'>
                                            Please review your order details and place you order.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button children={<div>
                                <p>Place Order</p>
                                <p className='text-sm font-light'>{dineValue === 'dineIn' ? 'Dine In : Pay After Meal' : 'Takeaway : Pay Now'}</p>
                            </div>} disabled={tableNumber === null || tableNumber <= 0} onClick={() => handleOrder()} className={`${tableNumber === null || tableNumber <= 0 ? `${Theme.disableBtn} text-black cursor-not-allowed` : `${Theme.buttonGradient} cursor-pointer`} md:w-150 w-full `} />
                        </div>
                    </div>
                </div>
                {console.log('tableNumber', tableNumber)}
                <div className={`lg:w-[40%] w-full p-5 bg-white rounded-2xl flex flex-col`}>
                    <div>
                        <div className="flex justify-between items-center">
                            <p className='font-bold text-xl'>Order Summary</p>
                        </div>
                        {cartState.cart.length !== 0 && <p className='text-gray-400'>{cartState.cart.length} Items</p>}
                        <hr className='text-gray-200 mt-2' />
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <CartInfo state={cartState} />
                    </div>
                    <TotalPayment />
                </div>
            </div>
            <div className='mt-4 lg:hidden flex'>
                <div className=' md:flex-row flex gap-5 flex-col 
                justify-between items-center bg-yellow-200 p-5 
                rounded-2xl shadow w-full'>
                    <div>
                        <div className='flex md:justify-start justify-center items-center gap-2'>
                            <BsStars className='text-amber-400' />
                            <p className='font-bold'>Almost there!</p>
                        </div>
                        <p className='text-sm text-center font-semilight text-gray-400'>
                            Please review your order details and place you order.
                        </p>
                    </div>
                    <Button children={<div>
                        <p>Place Order</p>
                        <p className='text-sm text-white font-light'>{dineValue === 'dineIn' ? 'Dine In : Pay After Meal' : 'Takeaway : Pay Now'}</p>
                    </div>} className={`${Theme.buttonGradient} md:w-auto w-full`}
                        onClick={() => handleOrder()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout