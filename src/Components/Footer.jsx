import { FaDownload } from 'react-icons/fa'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="bg-[#ff850b] py-20 text-white">
      <div className="">
        <div className="">

        </div>
        <div className="">
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

        <div className="mt-10 text-secondary text-center text-xs">© {year} All Rights Reserved by Swift</div>
      </div>
    </div>
  )
}

export default Footer