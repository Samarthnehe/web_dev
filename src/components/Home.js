import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Main from './Main';
import Mid from './Mid';
import Footer from './Footer'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Main/>
            <Mid/>
            <Footer/>
        </div>
    )
}

export default Home
