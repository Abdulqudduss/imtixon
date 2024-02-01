import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Login from './Login';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Mainlayout />}  /> 
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="portfolio" element={<Portfolio />} />
                <Route path="login" element={<Login />} />
                
            </Routes> 
        </Router>
    );
};

export default App;
