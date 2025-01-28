import React, { useState } from 'react'
import Layout from '../Components/Layout'
import about from '../assets/faq.png'
import { FaPlus, FaMinus, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import { Packages } from '../Components/Utils';
const Faqs = () => {
  const [isOpen, setIsOpen] = useState({}); // No type annotation here

  const toggleService = (id) => { // Remove type annotation
    setIsOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Layout>
      <div className="">
        <div className="bg-[#ff850b] z-30 md:flex pt-[7rem] lg:px-20 px-10 items-center justify-center h-auto lg:h-[32rem]">
          <img src={about} alt="" className="lg:w-[35rem] w-[25rem] z-30 object-cover h-auto" />
          <div className="text-white lg:px-1">
            <div className="text-4xl font-semibold">Support & FAQs (Frequently Asked Questions)            </div>
            <div className="text-lg mt-3">Welcome to the Swift Points Support & FAQs section. Here, we address some common questions and provide guidance on how to get the most out of the Swift Points Mining App. If you still have questions or need further assistance, don’t hesitate to contact our support team.
            </div>
          </div>
        </div>
        <div className="lg:-mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff850b " fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>

      <div className=" mx-5 lg:mx-32">
        <div className="">
          <div className=" mb-10">
            <div className="font-bold text-lg">Need More Help?</div>
            <div className="font-semibold">Visit our Help Center in the app or check our website for more resources. Stay connected with our social media channels for updates, announcements, and community support!</div>
          </div>
          <div className="border rounded-lg px-2">
            <div className="mt-10">
              {Packages.map((item) => (
                <div key={item.id}>
                  <div onClick={() => toggleService(item.id)} className="lg:w-full">
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className='lg:text-xl text-lg font-bold'>{item.text}</p>
                      <button className='p-1.5 text-gray-600'>
                        {isOpen[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <AnimatePresence>
                      {isOpen[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-start lg:w-[50vw] gap-2.5 mt-2"
                        >
                          <span className="bg-primary-50 p-2 text-base font-medium">{item.droptext.text}</span>
                          <span className="bg-primary-50 p-2 text-base font-medium">{item.droptext.subtext}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="border border-gray-300 w-full my-5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faqs
