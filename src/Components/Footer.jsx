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
        <div className=" bg-light border-red-300 text-white py-5">
          <div className="lg:flex items-start mx-10 justify-between ">
            <div className="">
              <p className='text-lg font-bold my-3'>SWIFT MINING APP</p>
              <p className='text-lg mb-5 font-medium'>Welcome to the Swift Ecosystem, a groundbreaking realm where blockchain technology, innovation, and opportunity converge to create a limitless future. Swift is not just a platform—it’s a movement, a vision, and a promise to redefine the way the world interacts with digital assets.</p>
            </div>

            <div className="w-full ">
              <p className='text-lg font-bold my-3'>WORKING HOURS</p>
              <div className="flex items-center justify-center"> <div className='border p-0.5 w-16 my-1 rounded-full bg-primary border-none'></div> </div>
              <p className='text-base font-semibold mb-2'>We welcome you every day:</p>
              <p className='text-base mb-4 font-medium'>Monday to Friday: 08:00 - 22:00</p>
              <p className='mb-6 text-base font-medium leading-4'>Saturday: 08:00 - 20:00</p>
              <p className='text-base font-medium leading-4'>Sunday: 08:00 - 20:00</p>
            </div>

            <div className="w-full">
              <div className="uppercase">dOWNLOAD THE APP ON</div>
              <div className="flex flex-wrap z-20 my-10 gap-3 items-center">
                <a href=""> <div className="flex items-center gap-5 bg-black border rounded-lg border-white w-[13.4rem] py-4 px-4 text-lg font-semibold">
                  <div className="">Web Download</div>
                  <FaDownload />
                </div></a>
                <a href="" rel="noreferrer"> <img src={apple} alt="" className="" /> </a>
                <a href="" rel="noreferrer"> <img src={google} alt="" className="" /> </a>
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