import React from 'react'
import Quote from './Quote'
import './Footer.scss'

export function Footer() {
    

    return (
        <footer>
            <div >
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
                <Quote />
            </div>
        </footer>
    )
}

export default Footer