import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import PriceList from './components/price/PriceList';
import Message from './components/Message/Message';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Organizations from './components/For_you/Organizations';
import People from './components/For_you/People';
import InstagramLink from './components/InstagramLink/InstagramLink';
import TelegramLink from './components/TelegramLink/TelegramLink';
import ViberLink from './components/ViberLink/ViberLink';
import CommentForm from './components/Comments/CommentForm';
import CommentsList from './components/Comments/CommentsList';
import CommentButton from './components/Comments/CommentButton';
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
                        <Organizations/>
                        <People/>
                    </div>
                    <div className="center-column">
                        <Routes>
                            <Route  path="/" element={<HomePage />} />
                            <Route path="/prices" element={<PriceList />} />
                            <Route path="/message" element={<Message />} />
                            <Route path="/comments" element={<CommentsList />} />
                        </Routes>
                    </div>
                    <div className="right-column">
                        <InstagramLink />
                        <TelegramLink />
                        <ViberLink />
                        <CommentButton />
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
