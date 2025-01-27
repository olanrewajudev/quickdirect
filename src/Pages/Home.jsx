import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/home.png'
import phone from '../assets/iphone.jpg'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-[#ff850b] z-30 md:flex pt-[15rem] lg:px-24 px-10 items-center justify-center h-auto lg:h-[32rem]">
          <div className="text-white lg:px-1 -mt-[12rem]">
            <div className="text-4xl font-bold">The First Digital Currency You Can Mine on Your Phone</div>
            <div className="text-xl mt-4 font-semibold">Start mining Swift cryptocurrency today with our free, energy-light mobile app!</div>
            <div className="flex gap-5 text-white border rounded-lg hover:bg-white hover:text-[#ff850b] border-white w-fit py-4 px-2 mt-16 ">
              <div className="">Download Swift App Now</div>
              <FaDownload />
            </div>
          </div>
          <img src={about} alt="" className="w-[40rem] z-20" />

        </div>
        <div className="lg:-mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff850b " fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>

      <div className="flex items-center gap-10 justify-center">
        <img src={phone} alt="" className="w-[15rem]" />
        <div className="">
          <div className="text-3xl font-bold">Swift makes crypto mining easy.</div>
          <div className="">Breakthrough tech allows you to mine Swift on your phone without draining your battery.</div>
          <Link to='/about' className="flex items-center gap-5 bg-[#ff850b] text-white border rounded-lg mt-5 border-white w-fit py-4 px-2 ">
            <div className="">Learn more about Swift</div>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className=""></div>
    </Layout>
  )
}

export default HomePage
