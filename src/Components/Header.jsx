import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/swift_logo.png'
import { SlMenu } from 'react-icons/sl'
import { TopNavsLinks } from './Utils'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
    const [topNav, setTopNav] = useState(false);
    const TopNavIcon = topNav ? FaTimes : SlMenu;
    return (
        <div className={`fixed w-full bg-white z-50 shadow-xl gap-10  ${topNav ? 'h-[22rem]' : 'h-0'} transition-all`}>
            <div className="bg-white fixed w-full px-10 z-50 text- p-4 flex justify-between items-center">
                <Link to='/' className=""> <img src={logo} alt="" className="h-12 w-auto" /> </Link>
                <div className="gap-10 hidden lg:flex">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/faq">Faqs</Link>
                    <Link to="/terms">Terms & Condition</Link>
                </div>
                <div className="lg:hidden flex text-xl lg:text-2xl cursor-pointer">
                    <TopNavIcon onClick={() => setTopNav(!topNav)} />
                </div>

            </div>
            {topNav && <div className="w-11/12 lg:w-10/12 px-7 mx-auto pt-20">
                <div className="flex flex-col">
                    {TopNavsLinks.map((item, index) => (
                        <Link to={item.link} key={index} className='uppercase text-xs py-3 px-4 truncate'>{item.title}</Link>
                    ))}
                </div>
            </div>}
            <br /><br />
        </div>
    )
}

export default Header
