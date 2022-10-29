import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <div className='home'>
            <Link to="/product">
                <h1 className='head'>Welcome To E-Commerce Website...</h1>
                <div className='home_box'>
                    <div className='l_img'><img className='imgs' src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" /></div>
                    <div className='r_img'><img className='imgs' src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" /></div>
                </div>
                <div className='btns'>
                    <button className='home_bt1'>Click To Continue</button>
                </div>
            </Link>
            <Footer />
        </div>
    )
}

export default Home