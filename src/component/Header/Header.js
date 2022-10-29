import React from 'react'
import '../../styles/Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='heading'>E-Commerce App</div>
            <a href="https://intezar-dev.netlify.app/">
                <div className='heading'><img className='header-img' src="https://avatars.githubusercontent.com/u/93022029?v=4" alt="" /></div>
            </a>
        </div>
    )
}

export default Header