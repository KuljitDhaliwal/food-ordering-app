
import { FaTimes, FaTrash } from 'react-icons/fa'
import Counter from './Counter'
import Button from './UI/Button'
import { Theme } from './UI/Theme'
import { useCart } from '../Hooks/CartContextHook'
import { useEffect } from 'react'
import Empty from '../assets/images/icons/empty.png'
import { useNavigate } from 'react-router-dom'
function Cart() {
  const { state, dispatch } = useCart()
  const navigate = useNavigate()
  //Increase Quantity
  const handleIncreaseQunatity = (item) => {
    const increase = { ...item, ['quantity']: item.quantity + 1 }
    console.log("Clicked +", increase)
    dispatch({
      type: 'Item_Quantity_Increase',
      payload: increase
    })
  }

  //Decrease Quantity
  const handleDecreaseQuantity = (item) => {
    const decrease = { ...item, ['quantity']: item.quantity - 1 }
    dispatch({
      type: 'Item_Quantity_Decrease',
      payload: decrease
    })
  }

  useEffect(() => {
    dispatch({ type: 'Cart_Total' })
  }, [state.cart])


  //Handle Input Instructions

  const handleInstructions = (e) => {
    const newObj = {[e.target.name]: e.target.value}
    dispatch({
      type: 'Add_Note',
      payload: newObj
    })
  }
  return (
    <>
    {console.log('Cart', state.cart)}
      <div className={`${state.toggleCart ? 'block' : 'hidden'} overlay fixed inset-0 bg-black/50 z-20`} onClick={() => dispatch({ type: 'Close_Cart' })}></div>
      <div className={`${state.toggleCart ? 'right-0' : '-right-130'} transition-all 
      duration-300 fixed h-screen top-0 w-130 flex flex-col
      z-200 border-l p-5 border-gray-400/50 bg-white shadow-2xl`}>
        <div>
          <div className="flex justify-between items-center">
            <p className='font-bold text-xl'>Your Order</p>
            <FaTimes className='text-lg cursor-pointer' onClick={() => dispatch({ type: 'Close_Cart' })} />
          </div>
          {state.cart.length !== 0 && <p className='text-gray-400'>{state.cart.length} Items</p>}

          <hr className='text-gray-200 mt-2' />
        </div>
        {state.cart.length === 0 ? (
          <div className='bg-yellow-50 left-1/2 -translate-x-1/2 w-[80%] h-fit rounded-2xl p-2 absolute top-1/2 -translate-y-1/2'>
            <div className="border border-amber-700/50 border-dashed rounded-2xl p-5">
              <img src={Empty} alt="empty_cart" className='h-20 m-auto' />
              <div className='text-center mt-4'>
                <p className='font-bold text-xl'>Your cart is empty</p>
                <p className='text-gray-400 text-sm font-extralight'>Looks like you haven't added anything yet.</p>
                <p className='text-gray-400 text-sm font-extralight'>Explore our menu and find something delicious!</p>
                <Button children={'Explore Menu'} onClick={()=>{navigate('/menu'), dispatch({type: 'Close_Cart'})}} className={`${Theme.buttonGradient} mt-4`}/>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className='flex flex-col h-full'>
              <div className='flex-1 overflow-auto'>
                <div className='grid gap-2 mt-4'>
                  {state.cart.map((item, key) => {
                    return <div key={key} className='bg-gray-50 rounded-2xl p-4 flex justify-between'>
                      <div className='flex flex-1 gap-3 items-stretch'>
                        <img src={item.strMealThumb} alt="Meal Image" className='h-20 w-20 rounded-2xl' />
                        <div className='flex-1'>
                          <p className='text-xl font-bold'>{item.strMeal}</p>
                          <p className='text-xl font-bold'>${item.mealPrice}</p>
                            <Counter increased={() => handleIncreaseQunatity(item)} decreased={() => handleDecreaseQuantity(item)} item={item} />
                            <input type="text" name={item.idMeal} placeholder='Speacl Instruction..?' 
                            onChange={(e)=> handleInstructions(e)}
                            className='border border-gray-400/50 p-2 px-3 w-full rounded-2xl mt-2'/>
                        </div>
                      </div>
                      <FaTrash className='cursor-pointer text-red-500' onClick={() => dispatch({ type: 'Remove_From_Cart', payload: item })} />
                    </div>
                  })}
                </div>
              </div>
              <div>
                <div className='border-t border-gray-200 border-b py-3'>
                  <div className="flex justify-between items-center">
                    <p className='text-gray-400 font-light'>Subtotal</p>
                    <p className='text-lg font-bold'>${state.total}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className='text-gray-400 font-light'>Service Fee</p>
                    <p className='text-lg font-bold'>${state.serviceCharge}</p>
                  </div>
                </div>
                <div className="flex text-2xl justify-between font-bold py-4">
                  <p>Total</p>
                  <p>${state.total}</p>
                </div>
                <Button children={'Proceed to Checkout ->'} className={`${Theme.buttonGradient} w-full`} />
              </div>
            </div>
          )}
      </div>
    </>
  )
}

export default Cart