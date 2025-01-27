import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <div className='bg-[#ff850b] mt-20'>
      <div className="text-center text-white font-semibold ">© {year} All Rights Reserved by Quick Direct</div>
    </div>
  )
}

export default Footer
