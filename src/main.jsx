// import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import about from './pages/about.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Login from './Login.jsx'
import Contact from './pages/Contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Navbar />
            
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>

)