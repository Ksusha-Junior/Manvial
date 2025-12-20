import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import PriceList from './components/price/PriceList';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="marquee-container">
                    <div className="scrolling-text">
                        Внимание! При регулировке 2 и более створок, СКИДКА!
                    </div>
                </div>
                <main className='main-content'>
                    <div className="left-column">
                    {/*<h2 className='header-text'>Качественно! Недорого! В удобное для Вас время!</h2>*/}
                        <PersonalInfo />
                    </div>
                    <div className="center-column">
                        <Routes>
                            <Route  path="/" element={<HomePage />} />
                            <Route path="/prices" element={<PriceList />} />
                        </Routes>
                    </div>
                    <div className="right-column">
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
