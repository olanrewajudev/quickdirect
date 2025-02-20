import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/about.png'
const About = () => {
  return (
    <Layout>

      <div className="">
        <div className="bg-[#f7f5f6]">
          <div className="grid grid-cols-1 lg:grid-cols-5 w-11/12 mx-auto lg:w-10/12 pt-28 lg:pt-20 h-[45rem] sm:h-[40rem] lg:h-auto">
            <div className="text-black z-30 lg:px-1 relative lg:col-span-3">
              <h1 className="lg:text-6xl text-3xl sm:text-4xl md:text-5xl font-extrabold pt-10">Get to know us <span className="bg-[#ff850b] text-white py-1 px-1.5 text-2xl md:text-3xl lg:text-4xl rounded-lg -translate-y-2">better.</span> </h1>
              <div className="lg:text-xl mt-4 font-semibold">Welcome to the Swift Ecosystem, a groundbreaking realm where blockchain technology, innovation, and opportunity converge to create a limitless future. Swift is not just a platform—it’s a movement, a vision, and a promise to redefine the way the world interacts with digital assets.</div>
            </div>
            <div className="relative lg:col-span-2">
              <div className="-mt-[11rem] lg:-mt-5 lg:z-10 absolute w-fit top-0 right-0 left-0 mx-auto"><img src={about} alt="" className=" h-[28rem] sm:h-[33rem] lg:h-[44rem]object-cover" /></div>
            </div>

          </div>
        </div>
        <div className="lg:-mt-10 -mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f5f6 " fillOpacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>
      {/* <div className="">
        <div className="bg-[#f7f5f6] z-40 lg:flex lg:px-24 lg:pt-[10rem] pt-[6rem] px-10 items-center justify-center lg:h-[27rem] h-auto ">
          <img src={about} alt="" className=" h-[28rem] sm:h-[33rem] lg:h-[30rem] z-30 object-cover border" />
          <div className=" lg:px-1">
            <div className="text-4xl lg:text-5xl font-extrabold">About Us</div>
            <div className="text-lg">Welcome to the Swift Ecosystem, a groundbreaking realm where blockchain technology, innovation, and opportunity converge to create a limitless future. Swift is not just a platform—it’s a movement, a vision, and a promise to redefine the way the world interacts with digital assets.
            </div>
          </div>
        </div>
        <div className="lg:-mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f5f6" fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div> */}
      <div className="">

        <div className="mb-10 md:mb-20 ">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">Who We Are</div>
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">The Swift Ecosystem is the realization of a bold dream by Team of world-class Ai and crypto Tech Expert , visionaries in the crypto industry since 2015. With years of relentless dedication to research, innovation, and community building, a team of world-class experts who share a singular goal: to make blockchain accessible, rewarding, and transformative for everyone.
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">Our Vision</div>
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">We envision a future where blockchain technology is not just a tool but a bridge—connecting people, ideas, and opportunities. Swift is the beacon that illuminates this journey, empowering individuals and communities to unlock new possibilities in the digital economy.
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">Our Mission</div>
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">Our mission is to create an inclusive, dynamic, and forward-thinking blockchain ecosystem. At Swift, we’re combining cutting-edge AI, innovative platforms, and community-first initiatives to deliver tools that drive financial empowerment, transparency, and global inclusion.
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">The Magical World of Swift</div>
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-bold text-lg mb-2">1. Swift Points Mining App</div>
            <div className="">
              Step into the world of limitless possibilities with the Swift Points Mining App—your gateway to earning Swift Points (SP) and participating in the evolution of blockchain. With unique features like monthly mining boosts, community rewards, and the groundbreaking transition to SwiftCoin (SC), this app is more than mining—it’s your ticket to financial empowerment.


            </div>
          </div>

          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-bold text-lg mb-2">2. Swift Blockchain</div>
            <div className="">
              Introducing the world 1st DCM block chain,
              At the heart of the ecosystem is the Swift Blockchain, a next-generation AI-powered infrastructure that is as fast as it is secure. Designed to handle the demands of a global community, it serves as the foundation for all Swift projects, ensuring scalability and future-readiness.
            </div>
          </div>

          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-bold text-lg mb-2">3. Swift Exchange</div>
            <div className="">
              Where innovation meets utility, the Swift Exchange combines the best of centralized and decentralized systems. Trade seamlessly, securely, and efficiently while benefiting from a platform that’s designed to revolutionize crypto trading and bring SwiftCoin to the global stage.
            </div>
          </div>

          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-bold text-lg mb-2">4. Swift Socifia Wallet Browser</div>
            <div className="">Imagine having a wallet that’s more than a wallet—a portal to the decentralized web. The Swift Social-Fi Wallet Browser is your companion for managing assets, exploring DApps, and navigating the blockchain world with the power of AI at your fingertips.
            </div>
            <div className="mt-3">
              The Swift Social-Fi Wallet Browser is not just another crypto wallet—it’s a revolutionary hybrid that merges Web2 and Web3 technologies into a single platform.
            </div>
            <div className="mt-3">
              Web2 (Social-Fi): Built to offer the familiarity of traditional internet browsing, Social-Fi allows users to explore their favorite Web2 platform effortlessly.
            </div>
            <div className="mt-3">
              Web3 Integration: Dive into the decentralized world with features like managing crypto assets, exploring DApps, and interacting with blockchain applications—all powered by AI for enhanced user experience.
            </div>
            <div className="mt-3">
              By seamlessly integrating the past (Web2) with the future (Web3), the Swift Social-Fi Wallet Browser empowers users to transition into the blockchain era while retaining the comfort of the web they already know.
            </div>
          </div>

          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-bold text-lg mb-2">5. SwiftCoin (SC)</div>
            <div className="">SwiftCoin is the jewel of the ecosystem, the ultimate reward for miners and the backbone of our economic model. Backed by real-world utility and a robust foundation, SwiftCoin promises to redefine what a cryptocurrency can achieve.
            </div>

            <div className="mt-3">
              <div className="">6. Swift Stablecoin (SUSD/SSUSD)</div>
              <div className="">For those seeking stability in an ever-changing world, the Swift Stablecoin offers a dependable solution. Pegged to the US Dollar, it ensures smooth transactions and a reliable store of value within the Swift Ecosystem.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">What Makes Swift Magical?</div>
          <ul className='text-start mx-5 md:mx-[10rem] text-lg mt-2'>
            <li className='mb-3'> <span className="font-bold">A Community Like No Other:</span> Swift is built for the people. From groundbreaking referral programs to engaging buyback systems, our ecosystem is designed to reward and uplift our users.</li>

            <li className='mb-3'><span className="font-bold">AI-Powered Brilliance:</span> At the heart of Swift lies a powerful AI engine, making our blockchain smarter, faster, and more adaptable than ever.
            </li>

            <li className='mb-3'><span className="font-bold">Unmatched Security and Transparency: </span> Our platforms are fortified with state-of-the-art security features, ensuring the safety and integrity of every transaction.
            </li>

            <li className='mb-3'><span className="font-bold">Sustainability with Purpose: </span> From mining to tokenomics, every aspect of Swift is designed to grow alongside its users, ensuring value for generations to come.

            </li>
          </ul>
        </div>

        <div className="mt-20">
          <div className="text-center text-4xl lg:text-5xl font-extrabold">A World of Endless Possibilities        </div>
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="mb-3">Swift is not just about mining or trading—it’s about creating an ecosystem where innovation and opportunity thrive. From the Swift Points Mining App to SwiftCoin and beyond, our ecosystem is designed to empower, reward, and transform lives.
            </div>
            <div className="mb-3">Whether you’re here to mine, trade, or innovate, Swift welcomes you with open arms. Join us as we embark on this magical journey to redefine the blockchain landscape and unlock the future of digital assets.
            </div>
            <div className="">Swift—where innovation meets opportunity, and the future begins today.</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
