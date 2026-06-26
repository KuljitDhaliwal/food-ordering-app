import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './Context/cartContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FinalOrderProvider } from './Context/finalOrderContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <CartProvider>
          <FinalOrderProvider>
            <App />
          </FinalOrderProvider>
        </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
