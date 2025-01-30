import { BsPhoneFlip } from 'react-icons/bs'
import decentralized from '../assets/decentralized.png'
import mobile from '../assets/phone.png'
import { GrSecure } from 'react-icons/gr'
import { FaPeopleGroup } from 'react-icons/fa6'


export const homeBox = [
    { Icon: GrSecure, title: 'Decentralized', text: 'Secure, Immutable, non-counterfeitable and interoperable digital money.' },
    { Icon: BsPhoneFlip, title: 'Mobile First', text: 'Works on your mobile phone and does not drain your battery.' },
    { Icon: FaPeopleGroup, title: 'User & Planet-Friendly', text: 'Easy to use, secure at scale, without the massive electrical waste.' },
]

export const TopNavsLinks = [
    { title: 'home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Privacy Policy', link: '/privacy' },
    { title: 'FAQs', link: '/faq' },
    { title: 'Terms & Conditions', link: '/terms' },
]

export const Packages = [
    {
        droptext: { text: `Swift Points (SP) are digital rewards mined within the Swift Points Mining App. SP can be earned by users through mining and participating in ecosystem activities, with the potential to convert them to SwiftCoin (SC) in the future.`, },
        text: '1. What is Swift Points?',
        id: 1
    },
    {
        droptext: {
            text: `Mining is simple:`,

            subtext: [
                `Open the Swift Points app.`, <br />,
                `Tap “Start Mining.”`, <br />,
                `Mining rewards are credited every 12 hours. Ensure to reactivate mining sessions regularly to maximize your earnings.`,
            ]
        },
        text: `2. How does the mining process work?`,
        id: 2
    },
    {
        droptext: { text: `Yes, the Swift Points Mining App is completely free to download and use. There are no charges for mining SP.`, },
        text: '3. Is the app free to use?',
        id: 3
    },
    {
        droptext: {
            text: `Share your unique referral code  available in the app.`,

            subtext: [
                `For every active referral, you receive Swift points (SP) and incentives.`, <br />,
                `The referral program includes special milestones where you can earn USDT rewards based on the number of active miners you refer.”`, <br />,
            ]
        },
        text: '4. How do I refer friends and earn rewards?',
        id: 4
    },
    {
        droptext: { text: `The buyback program allows users to exchange their mined Swift Points (SP) for USDT during specific periods. The rates are predetermined, e.g., 100 SP = 1 USDT.`, },
        text: '5. What is the buyback program?',
        id: 5
    },
    {
        droptext: { text: `Once SwiftCoin (SC) launches, your Swift Points can be converted into SwiftCoin at the standard conversion rate of 1,000 SP = 1 SC, allowing you to participate in the broader cryptocurrency market.`, },
        text: '6. What happens to Swift Points after SwiftCoin launches?',
        id: 6
    },
    {
        droptext: { text: `Yes, Swift Points (SP) can be transferred between users! This feature is already integrated into the app, allowing users to exchange SP seamlessly. Whether you’re rewarding someone, engaging in peer-to-peer exchanges, or building a stronger community, transferring SP is fast, secure, and easy to use.`, },
        text: '7. Can I transfer Swift Points to another user?',
        id: 7
    },
    {
        droptext: { text: `Mining rates may decrease as more users join the ecosystem. This adjustment is designed to maintain the balance and sustainability of Swift Points over time.`, },
        text: '8. Why is my mining rate decreasing?',
        id: 8
    },
    {
        droptext: {
            text: `Be an early adopter to enjoy higher initial mining rates.`,

            subtext: [
                `Refer friends and participate in special mining rate boosts announced periodically.`, <br />,
                `Stay active and log in daily to maximize mining sessions.”`, <br />,
                `Engage in our social educational programs to increase your SP.`,
            ]
        },
        text: '9. How can I increase my mining rewards?',
        id: 9
    },
    {
        droptext: { text: `The Social-Fi Wallet Browser is an integrated Web2 and Web3 platform that allows users to explore decentralized applications (DApps), manage cryptocurrencies, and perform transactions securely within the Swift Ecosystem.`, },
        text: '10. What is the Social-Fi Wallet Browser?',
        id: 10
    },
    {
        droptext: { text: `Yes, your data is secure. We follow stringent privacy and security protocols as outlined in our Privacy Policy to ensure your personal and transactional data is protected.`, },
        text: '11. Is my data safe with Swift Points?',
        id: 11
    },
    {
        droptext: {
            text: `If you encounter any challenges or have further questions, please contact our support team:`,
            subtext: [
                `Email: support@swiftpointsproject.com`, <br />,
                `Phone: +1332350929`, <br />,
                `Feedback: Available on our app.`
            ]

        },
        text: '12. How do I contact support if I face issues?',
        id: 12
    },
];