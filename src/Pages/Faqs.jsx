import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/about.png'

const Faqs = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-[#ff850b] z-30 flex pt-[5rem] px-20 items-center justify-center h-[32rem]">
          <img src={about} alt="" className="w-[35rem] object-cover h-auto" />
          <div className="text-white px-10">
            <div className="text-4xl font-semibold">About Us</div>
            <div className="text-lg">Welcome to the Swift Ecosystem, a groundbreaking realm where blockchain technology, innovation, and opportunity converge to create a limitless future. Swift is not just a platform—it’s a movement, a vision, and a promise to redefine the way the world interacts with digital assets.</div>
          </div>
        </div>
        <div className="-mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff850b " fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>
    </Layout>
  )
}

export default Faqs
