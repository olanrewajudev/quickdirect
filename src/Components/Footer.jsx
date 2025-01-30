import { FaDownload } from 'react-icons/fa'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import { Link } from 'react-router-dom'
function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>

      <div className="bg-[#ff850b] mt-10 py-5 text-white">
        <div className=" text-white py-5">
          <div className="lg:flex gap-20 mx-auto w-11/12 items-center justify-center ">
            <div className="">
              <p className='text-4xl font-extrabold my-3'>SWIFT MINING APP</p>
              <p className=' lg:text-lg mb-5 font-medium'>Welcome to the Swift Ecosystem, a groundbreaking realm where blockchain technology, innovation, and opportunity converge to create a limitless future. Swift is not just a platform—it’s a movement, a vision, and a promise to redefine the way the world interacts with digital assets.</p>
            </div>


            <div className="w-full  ">
              <div className="text-lg font-bold my-3">DOWNLOAD THE APP ON</div>
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
          </div>
        </div>
        <div className="">



          <div className="mt-10 text-secondary text-center ">© {year} All Rights Reserved by Swift Ecosystem</div>
        </div>
      </div>
    </>
  )
}

export default Footer