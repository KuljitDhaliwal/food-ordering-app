import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../Layout/PublicLayout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Deals from '../Pages/Deals'
import Orders from '../Pages/Orders'
import Menu from '../Pages/Menu'
import Checkout from '../Pages/Checkout'
import OrderSuccess from '../Pages/OrderSuccess'
import Entry from '../Components/Entry'
import NotFound from '../Pages/NotFound'

function Index() {
    return (
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/deals" element={<Deals />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess/>} />
                    <Route path="/entry" element={<Entry/>} />
                    <Route path="/*" element={<NotFound/>} />

                </Route> 
            </Routes>
    )
}

export default Index