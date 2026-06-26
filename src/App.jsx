import React, { useEffect } from 'react'
import PublicLayout from './Layout/PublicLayout'
import Index from './Routes'
import Cart from './Components/Cart'
import Back from './assets/images/back.png'
import { useCart } from './Hooks/CartContextHook'
function App() {
  const { state, dispatch } = useCart()

  useEffect(() => {
    const tableInfo = JSON.parse(localStorage.getItem('Order'))
    const queryParam = window.location.search
    const urlParams = new URLSearchParams(queryParam)
    const table = urlParams.get('table')

    if (table) {
      localStorage.setItem('Order', JSON.stringify({ 'table': table }))
      dispatch({
        type: 'Set_Table',
        payload: table
      })
    }else if(tableInfo){
      dispatch({
        type: 'Set_Table',
        payload: tableInfo.table
      })
    }
  }, [])

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-[url('./assets/images/back.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute w-full h-full bg-white/60"></div>
      <Index />
      <Cart />
    </div>
  )
}

export default App