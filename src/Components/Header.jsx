import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { SlMenu } from 'react-icons/sl'
import { TopNavsLinks } from './Utils'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const MobileIcon = mobile ? FaTimes : SlMenu;
    const [topNav, setTopNav] = useState(false);
    const TopNavIcon = topNav ? FaTimes : SlMenu;
    return (
        <div className={`fixed w-full bg-white z-50 shadow-xl gap-10  ${topNav ? 'h-[20rem]' : ''} transition-all`}>
            <div className="bg-[#ff850b] fixed w-full border-b px-20 z-50 text-white p-4 flex justify-between items-center">
                <div className=""> <img src={logo} alt="" className="" /> </div>
                <div className="gap-10  hidden lg:flex">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Terms & Condition</Link>
                    <Link to="">News Blog</Link>
                </div>
                <div className="xl:hidden flex text-xl lg:text-2xl cursor-pointer">
                    <TopNavIcon onClick={() => setTopNav(!topNav)} />
                </div>

            </div>
            {topNav && <div className="w-11/12 lg:w-10/12 mx-auto pt-20">
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
