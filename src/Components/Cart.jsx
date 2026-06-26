import { FaTimes } from 'react-icons/fa'
import Counter from './Counter'
import Button from './UI/Button'
import { Theme } from './UI/Theme'
import { useCart } from '../Hooks/CartContextHook'
import { useEffect, useState } from 'react'
import Empty from '../assets/images/icons/empty.png'
import { useNavigate } from 'react-router-dom'
import CartInfo from './CartInfo'
import TotalPayment from './TotalPayment'
function Cart() {
  const { state, dispatch } = useCart()
  const [order, setOrder] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'Cart_Total' })
  }, [state.cart])

  return (
    <>
      <div className={`${state?.toggleCart ? 'block' : 'hidden'} overlay fixed inset-0 bg-black/50 z-20`} onClick={() => dispatch({ type: 'Close_Cart' })}></div>
      <div className={`${state?.toggleCart ? 'translate-x-0' : 'translate-x-full'} transition-transform 
        duration-300 fixed h-screen top-0 right-0 md:w-130 w-full flex flex-col max-h-screen
        z-100 border-l p-5 border-gray-400/50 bg-white shadow-2xl`}>
        <div>
          <div className="flex justify-between items-center">
            <p className='font-bold text-xl'>Your Order</p>
            <FaTimes className='text-lg cursor-pointer' onClick={() => dispatch({ type: 'Close_Cart' })} />
          </div>
          {state?.cart?.length !== 0 && <p className='text-gray-400'>{state?.cart?.length} Items</p>}

          <hr className='text-gray-200 mt-2' />
        </div>
        {console.log('Final Order', order)}
        {state?.cart?.length === 0 ? (
          <div className='bg-yellow-50 left-1/2 -translate-x-1/2 w-[80%] h-fit rounded-2xl p-2 absolute top-1/2 -translate-y-1/2'>
            <div className="border border-amber-700/50 border-dashed rounded-2xl p-5">
              <img src={Empty} alt="empty_cart" className='h-20 m-auto' />
              <div className='text-center mt-4'>
                <p className='font-bold text-xl'>Your cart is empty</p>
                <p className='text-gray-400 text-sm font-extralight'>Looks like you haven't added anything yet.</p>
                <p className='text-gray-400 text-sm font-extralight'>Explore our menu and find something delicious!</p>
                <Button children={'Explore Menu'} onClick={() => { navigate('/menu'), dispatch({ type: 'Close_Cart' }) }} className={`${Theme.buttonGradient} mt-4`} />
              </div>
            </div>
          </div>
        )
          :
          (
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <CartInfo state={state}/>
              <TotalPayment/>
              <Button children={'Proceed to Checkout'}
                className={`${Theme.buttonGradient} w-full mt-4 cursor-pointer`}
                onClick={() => { navigate('/checkout'), dispatch({ type: 'Close_Cart' }) }} />
            </div>
          )}
      </div>
    </>
  )
}

export default Cart