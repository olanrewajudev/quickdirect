import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/home.png'
import phone from '../assets/iphone.png'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import home2 from '../assets/home2.png'
import web from '../assets/web.png'
import { homeBox } from '../Components/Utils'
const HomePage = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-[#f7f5f6] z-40 lg:flex lg:px-24 lg:pt-[15rem] pt-[6rem] px-10 items-center justify-center lg:h-[32rem] h-auto ">
          <div className="text-[#ff850b] z-30 lg:px-1 ">
            <div className="lg:text-4xl text-2xl font-bold">The First Digital Currency You Can Mine on Your Phone</div>
            <div className="lg:text-xl mt-4 font-semibold">Start mining Swift cryptocurrency today with our free, energy-light mobile app!</div>

            <div className="flex flex-wrap z-30 my-10 gap-3 items-center">
              <a href=""> <div className="flex items-center justify-center text-white gap-5 bg-black border rounded-lg border-white w-[13rem] py-3 px-2 text-lg font-semibold">
                <div className="">Web Download</div>
                <FaDownload />
              </div>
              </a>
              <a href="" rel="noreferrer"> <img src={apple} alt="" className="w-[11rem]" /> </a>
              <a href="" rel="noreferrer"> <img src={google} alt="" className="w-[11rem] z-20" /> </a>
            </div>
          </div>
          <div className=" z-20"><img src={phone} alt="" className=" lg:w-[55rem]" /></div>

        </div>
        <div className="lg:-mt-10 -mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f5f6 " fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>

      <div className="xl:flex mt-20 items-center text-[#ff850b] gap-10 mx-5 justify-center">
        <img src={about} alt="" className="" />
        <div className="">
          <div className="text-3xl font-bold">Swift makes crypto mining easy.</div>
          <div className="text-lg font-semibold mt-5">Breakthrough tech allows you to mine Swift on your phone without draining your battery.</div>
          <div className="text-lg font-semibold mb-5">The Swift Ecosystem is the realization of a bold dream by Team of world-class Ai and crypto Tech Expert , visionaries in the crypto industry since 2015. With years of relentless dedication to research, innovation, and community building, a team of world-class experts who share a singular goal: to make blockchain accessible, rewarding, and transformative for everyone.</div>
          <Link to='/about' className="flex items-center gap-5 bg-[#ff850b] text-white border rounded-lg mt-5 border-white w-fit py-4 px-2 ">
            <div className="">Learn more about Swift</div>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="my-20 text-">
        <div className="bg-white my-10  rounded-md lg:flex lg:mx-32 mx-10 items-center gap-10 justify-between">
          {homeBox.map((item, index) => (
            <div className="flex shadow-2xl py-6 w-full px-4 mb-2 border border-gray-300 rounded-lg flex-col text-center justify-center items-center" key={index}>
              <img src={item.img} alt="" className="w-20" />
              <div className="text-xl font-bold my-3"> {item.title} </div>
              <div className=""> {item.text} </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="bg-[#ff850b] z-30 lg:flex lg:mx-32 mx-10 rounded-2xl  px-10 items-center justify-center h-auto my-10 py-5 ">
          <div className=" z-20"><img src={home2} alt="" className=" " /></div>
          <div className="text-white lg:px-1 ">
            <div className="lg:text-4xl text-2xl font-bold">Download the mobile app to start mining today! Join now.</div>
            <div className="lg:text-xl mt-4 font-semibold">Keep your money! Mining Swift is free. All you need is an invitation from an existing trusted member on the network. If you have an invitation you can download the mobile app below.            </div>


          </div>

        </div>
      </div>
    </Layout>
  )
}

export default HomePage
