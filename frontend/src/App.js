import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PostList from './components/post/PostList';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                    <main className='main-content'>
                    <h2 className='content'>Внимание! При регулировке 2 и более створок, СКИДКА!</h2>
                        <Routes className='routes-content'>

                            <Route path="/" element={<PostList />} />

                        </Routes>
                    </main>
                </div>
        </Router>
    );
}

export default App;
