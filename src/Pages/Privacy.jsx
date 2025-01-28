import React from 'react'
import Layout from '../Components/Layout'
import about from '../assets/policy.png'

const Privacy = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-[#ff850b] z-30 md:flex pt-[5rem] lg:px-20 px-10 items-center justify-center h-auto lg:h-[32rem]">
          <img src={about} alt="" className="lg:w-[35rem] w-[25rem] z-30 object-cover h-auto" />
          <div className="text-white lg:px-1">
            <div className="text-4xl mb-3 font-semibold">Privacy Policy for Swift Points Mining App</div>
            <div className="text-lg mb-3">
              At Swift Points, your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use the Swift Points Mining App and associated services within the Swift Ecosystem.
            </div>
            <div className="mb-3 text-lg">By using our app, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services.            </div>
            <div className="text-lg font-semibold">Effective Date: 9th January 2024</div>
          </div>
        </div>
        <div className="lg:-mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff850b " fill-opacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,80C213.3,85,267,139,320,149.3C373.3,160,427,128,480,144C533.3,160,587,224,640,256C693.3,288,747,288,800,250.7C853.3,213,907,139,960,122.7C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,234.7C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">1. Information We Collect</div>
          <div className="">We collect the following types of information to provide and improve our services:</div>
          <div className="">
            <div className="">a. Personal Information</div>
            <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Wallet Address</li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="">b. Device Information</div>
            <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
              <li>Device type (e.g., smartphone, tablet)</li>
              <li>Operating system version</li>
              <li>App version and usage data</li>
            </ul>
          </div>

          <div className="mt-8">
            <div className="">c. Usage Information            </div>
            <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
              <li>Mining activities (e.g., time spent mining, referral counts)</li>
              <li>Transaction history</li>
              <li>Interactions with features of the app</li>
            </ul>
          </div>

          <div className="mt-8">
            <div className="">d. Location Data</div>
            <div className="">We may collect approximate location data for purposes such as regional bonuses, mining boosts, or compliance with local regulations.           </div>
          </div>

          <div className="mt-8">
            <div className="">e. Cookies and Tracking Technologies</div>
            <div className="">We use cookies and similar technologies to enhance your experience, including saving preferences and tracking app performance.</div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">2. How We Use Your Information</div>
          <div className="">We use the information we collect to:</div>
          <div className=''>
            <div className='mb-3'> <span className="font-bold">1. Provide Services:</span> Ensure you can mine Swift Points, track your progress, and redeem rewards.</div>
            <div className='mb-3'> <span className="font-bold">2. Improve User Experience:</span> Optimize app functionality and ensure a smooth experience.</div>
            <div className='mb-3'> <span className="font-bold">3. Communicate:</span> Send updates, promotional offers, and account-related notifications.</div>
            <div className='mb-3'> <span className="font-bold">4. Security:</span> Detect and prevent fraudulent activity, unauthorized access, or other violations.</div>
            <div className='mb-3'> <span className="font-bold">5. Compliance:</span>Ensure adherence to local regulations and legal requirements.</div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">3. Sharing Your Information</div>
          <div className="">We do not sell or rent your personal information to third parties. However, we may share your data in the following scenarios:          </div>
          <div className=''>
            <div className="mt-8">
              <div className="">a. Service Providers</div>
              <div className="">Third-party vendors may assist us in app hosting, analytics, and customer support. These providers are contractually obligated to protect your information.</div>
            </div>

            <div className="mt-8">
              <div className="">b. Legal Obligations</div>
              <div className="">We may disclose your information to comply with legal requirements, enforce terms of service, or protect our rights and users.</div>
            </div>

            <div className="mt-8">
              <div className="">c. Business Transfers</div>
              <div className="">In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to this Privacy Policy.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">4. Security of Your Information</div>
          <div className="">We prioritize the security of your data and employ industry-standard measures to protect it, including:</div>
          <div className="">Data encryption during transmission and storage</div>
          <div className="">Secure user authentication</div>
          <div className="">Regular security audits         </div>
          <div className="">However, no system is completely secure. While we strive to protect your data, we cannot guarantee absolute security.</div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">5. Your Choices and Rights          </div>
          <div className="">We respect your control over your personal information. You can:</div>
          <div className=''>
            <div className='mb-3'> <span className="font-bold">1. Access and Update Information:</span> Ensure you can mine Swift Points, track your progress, and redeem rewards.</div>
            <div className='mb-3'> <span className="font-bold">2. Withdraw Consent:</span> Optimize app functionality and ensure a smooth experience.</div>
            <div className='mb-3'> <span className="font-bold">3. Delete Account:</span> Send updates, promotional offers, and account-related notifications.</div>
            <div className="">To exercise your rights, contact us at support@swiftpointsproject.com</div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">6. Children’s Privacy</div>
          <div className="">The Swift Points Mining App is not intended for children under 13. We do not knowingly collect data from minors. If we discover that a child’s information has been collected, it will be promptly deleted.</div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">7. International Data Transfers          </div>
          <div className="">Your data may be stored and processed outside your country of residence. We ensure compliance with applicable data protection laws for international transfers.</div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">8. Updates to This Privacy Policy          </div>
          <div className="">We may update this Privacy Policy to reflect changes in technology, regulations, or our services. Any updates will be posted on this page, and significant changes will be communicated through the app or email.</div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <div className="text-start mx-5 md:mx-[10rem] text-lg mt-2">
          <div className="font-bold text-2xl mb-2">9. Contact Us</div>
          <div className="">If you have questions or concerns about this Privacy Policy, please contact us at:</div>
          <div className="">Swift Points Team</div>
          <div className="">Email: support@swiftpointsproject.com          </div>
          <div className="">Phone: +1 332 350 929</div>
        </div>
      </div>
      <div className="text-center mx-5 font-bold text-lg">This Privacy Policy is designed to comply with major data protection regulations, including GDPR, CCPA, and other relevant laws.</div>
    </Layout>
  )
}

export default Privacy
