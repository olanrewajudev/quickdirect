import React from 'react'
import about from '../assets/terms.png'
import Layout from '../Components/Layout'

const Terms = () => {
  return (
    <Layout>
          <div className="">
            <div className="bg-[#f7f5f6]">
              <div className="grid grid-cols-1 lg:grid-cols-5 w-11/12 mx-auto lg:w-10/12 pt-28 lg:pt-20 h-[45rem] sm:h-[40rem] lg:h-auto">
                <div className="text-black z-30 lg:px-1 relative lg:col-span-3">
                  <h1 className="lg:text-6xl text-3xl sm:text-4xl md:text-5xl font-extrabold pt-10">Terms and Conditions for Swift Points <span className="bg-[#ff850b] text-white py-1 px-1.5 text-2xl md:text-3xl lg:text-4xl rounded-lg -translate-y-2">Mining App </span> </h1>
                  <div className="lg:text-xl mt-4 font-semibold">Welcome to the Swift Points Mining App. By downloading, accessing, or using the app, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the app.</div>
                  <div className="lg:text-xl mt-4 font-semibold">Effective Date: 9th January 2024</div>
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
      <div className="text">
        <div className="text-3xl my-5 font-bold text-center">These terms form a legal agreement between you (the "User") and Swift Ecosystem (“we,” “our,” or “us”).</div>
        <div className="mb-10 md:mb-20">
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-extrabold text-3xl mb-2">1. Use of the App</div>
            <div className=''>
              <div className="mt-8">
                <div className="font-extrabold text-3xl">a. Eligibility</div>
                <div className="">You must be at least 18 years old or have the consent of a legal guardian to use the app.</div>
                <div className="">You agree to comply with all applicable laws and regulations when using the app.</div>
              </div>

              <div className="mt-8">
                <div className="font-extrabold text-3xl">b. Account Registration</div>
                <div className="">To access the app, you must create an account by providing accurate and complete information.</div>
                <div className="">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</div>
              </div>

              <div className="mt-8">
                <div className="font-extrabold text-3xl">c. Mining Activity</div>
                <div className="">The mining of Swift Points (SP) is strictly limited to non-automated activity. Any use of bots, scripts, or unauthorized software is prohibited and may result in account suspension.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-extrabold text-3xl mb-2">2. Swift Points (SP)</div>
            <div className=''>
              <div className="mt-8">
                <div className="font-extrabold text-3xl">a. Nature of Swift Points</div>
                <div className="">Swift Points are utility tokens designed to be mined within the app.</div>
                <div className="">SP cannot be purchased directly from the app but may be redeemed, transfered, converted, or traded in accordance with our ecosystem rules.</div>
              </div>

              <div className="mt-8">
                <div className="font-extrabold text-3xl">b. Mining Rewards</div>
                <div className="">The mining rate is determined by the app and may change based on the number of active miners, ecosystem needs, or other factors.</div>
                <div className="">SP rewards are credited based on active mining sessions initiated by the user.</div>
              </div>

              <div className="mt-8">
                <div className="font-extrabold text-3xl">c. Buyback Program</div>
                <div className="">Users may participate in the Swift Points Buyback Program, subject to the terms and conditions outlined separately.</div>
                <div className="">The buyback program is subject to availability, limits, and changes at our discretion.</div>
              </div>

              <div className="mt-8">
                <div className="font-extrabold text-3xl">d. Conversion to SwiftCoin (SC)</div>
                <div className="">SP may be converted into SwiftCoin (SC), a tradable cryptocurrency, upon the official launch of SwiftCoin. The conversion rate is determined by the Swift Ecosystem Team.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="font-extrabold text-3xl mb-2">3. User Conduct</div>
            <div className="">You agree not to:</div>
            <div className='mt-4'>
              <div className="mb-3">1. Use the app for illegal purposes or activities.</div>
              <div className="mb-3">2. Interfere with the app’s security features or functionality.</div>
              <div className="mb-3">3. Exploit, hack, or reverse-engineer any part of the app.</div>
              <div className="mb-3">4. Engage in fraudulent activities, including false referrals or creating multiple accounts.</div>
              <div className="mb-3">Violation of these rules may result in suspension or termination of your account.</div>
            </div>
          </div>
        </div>


        <div className="mb-10 md:mb-20">
          <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">4. Intellectual Property</div>
              <div className="">All intellectual property rights, including the Swift Points logo, design, software, and content, belong to Swift Ecosystem. You may not copy, modify, distribute, or create derivative works without prior written consent.</div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">5. Limitation of Liability</div>
              <div className="">All intellectual property rights, including the Swift Points logo, design, software, and content, belong to Swift Ecosystem. You may not copy, modify, distribute, or create derivative works without prior written consent.</div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">6. Privacy and Data Use</div>
              <div className="">Your use of the app is governed by our Privacy Policy, which outlines how we collect, use, and protect your data.</div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">7. Termination of Use</div>
              <div className="">We reserve the right to:</div>
              <div className="">Suspend or terminate your account if you violate these terms.</div>
              <div className="">Modify or discontinue the app without notice.</div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">8. Updates to Terms</div>
              <div className="">We may update these Terms and Conditions to reflect changes in our services, laws, or business practices. Updates will be posted on our website or app, and continued use constitutes your acceptance of the changes.          </div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">9. Governing Law and Dispute Resolution</div>
              <div className="">These Terms are governed by the laws of [USA/ UAE]. Any disputes will be resolved through arbitration in accordance with the laws of the governing jurisdiction.</div>
            </div>

            <div className="mb-10 md:mb-20">
              <div className="font-extrabold text-3xl mb-2">10. Contact Us</div>
              <div className="mb-2">If you have questions about these Terms and Conditions, contact us at:          </div>
              <div className="mb-2">Swift Points Team</div>
              <div className="mb-2">Email: support@swiftpointsproject.com          </div>
              <div className="mb-2">Phone: +1 332 350 929</div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Terms
