import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/home.png'
import phone from '../assets/iphone.png'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import home2 from '../assets/home2.png'
import { homeBox } from '../Components/Utils'
import reddy from "../assets/reddy.jpg"
import wri from "../assets/wri.png"


const HomePage = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-[#f7f5f6]">
          <div className="grid grid-cols-1 lg:grid-cols-5 w-11/12 mx-auto lg:w-10/12 pt-28 lg:pt-20 h-[45rem] sm:h-[40rem] lg:h-auto">
            <div className="text-black z-30 lg:px-1 relative lg:col-span-3">
             <div className="relative">
             <h1 className="lg:text-6xl text-3xl sm:text-4xl md:text-5xl font-extrabold pt-10 leading-10 lg:leading-20">The #1 <span className="bg-[#ff850b] text-white py-1 px-1.5 text-2xl md:text-3xl lg:text-5xl rounded-lg -translate-y-2">Digital </span>  Currency You Can Mine on Your Phone</h1>
              <div className="lg:text-xl mt-4 font-semibold">Start mining Swift cryptocurrency today with our free, energy-light mobile app!</div>
              <img src={wri} alt="" className="absolute bottom-[1rem] opacity-30 right-10 hue-rotate-[10] h-[10rem] lg:h-[20rem] -z-10 w-auto" />
             </div>

              <div className="flex flex-wrap z-30 my-3 lg:my-10 gap-3 items-center lg:justify-start justify-center">
                <a href=""> <div className="flex items-center justify-center text-white gap-5 bg-black border rounded-lg border-white w-[9rem] truncate lg:w-[11rem] py-3 px-2 text-xs md:text-sm lg:text-lg font-semibold text-center">
                  <div className="">Web Download</div>
                  <div> <FaDownload /> </div>
                </div>
                </a>
                <a href="" rel="noreferrer"> <img src={apple} alt="" className="w-[8rem] lg:w-[11rem]" /> </a>
                <a href="" rel="noreferrer"> <img src={google} alt="" className="w-[8rem] lg:w-[11rem] z-20" /> </a>
              </div>
            </div>
            <div className="relative lg:col-span-2">
              <div className="-mt-[11rem] lg:-mt-5 lg:z-10 absolute w-fit top-0 right-0 left-0 mx-auto"><img src={phone} alt="" className=" h-[28rem] sm:h-[33rem] lg:h-[37rem]object-cover" /></div>
            </div>

          </div>
        </div>
        <div className="lg:-mt-10 -mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f5f6 " fillOpacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>
      

      <div className="xl:flex mt-20 items-center gap-10 mx-5 justify-center relative">
        <img src={reddy} alt="" className="absolute size-[15rem] lg:size-[30rem] -top-10 -right-10 object-cover opacity-30 -z-10" />
        <img src={about} alt="" className="" />
        <div className="">
          <div className="text-4xl lg:text-6xl font-extrabold">Swift makes crypto mining easy.</div>
          <div className="text-sm md:text-lg mb-4 font-semibold mt-5">Breakthrough tech allows you to mine Swift on your phone without draining your battery.</div>
          <div className="text-sm md:text-lg mb-4 font-semibold">The Swift Ecosystem is the realization of a bold dream by Team of world-class Ai and crypto Tech Expert , visionaries in the crypto industry since 2015. With years of relentless dedication to research, innovation, and community building, a team of world-class experts who share a singular goal: to make blockchain accessible, rewarding, and transformative for everyone.</div>
          <Link to='/about' className="flex items-center gap-5 bg-[#ff850b] text-white border rounded-lg mt-5 border-white w-fit py-4 px-2 ">
            <div className="">Learn more about Swift</div>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="my-20 w-11/12 mx-auto relative">
      <img src={reddy} alt="" className="absolute size-[30rem] -top-20 -left-20 rotate-180 object-cover opacity-30 -z-10" />

        <div className="bg-white my-10 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3">
          {homeBox.map((item, index) => (

            <div className="e-card playing mx-auto w-full lg:w-10/12" key={index}>
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>


              <div className="infotop w-11/12 mx-auto">
                <item.Icon className='text-6xl lg:text-6xl' />
                <br />
                {item.title}
                <br />
                <div className="name">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:w-10/12">
        <div className="card">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-auto z-30 p-10">
            <div className=" z-20"><img src={home2} alt="" className=" " /></div>
            <div className="text-white lg:px-1 ">
              <div className="lg:text-4xl text-2xl font-bold mt-0 lg:mt-20">Download the mobile app to start mining today! Join now.</div>
              <div className="lg:text-xl mt-4 font-semibold text-white">Keep your money! Mining Swift is free. All you need is an invitation from an existing trusted member on the network. If you have an invitation you can download the mobile app below.            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
