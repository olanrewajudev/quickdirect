import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Header = () => {
    return (
        <div>
            <div className="bg-[#ff850b] fixed w-full border-b px-20 z-50 text-white p-4 flex justify-between items-center">
                <div className=""> <img src={logo} alt="" className="" /> </div>
                <div className="gap-10 flex">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Terms & Condition</Link>
                    <Link to="">News Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
