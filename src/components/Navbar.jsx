import React from 'react'
import earth from '../images/earth.png'
export function Navbar() {
    

    return (
        <>
            <nav>
                <img src={earth}  alt="earth"  className='nav-img'/>
                <h1 className='nav-text'>MY TRAVEL JOURNAL</h1>
            </nav>
        </>
    )
}
