import React from 'react'
import amazon from '../assets/amazon-2-logo-svgrepo-com 1.svg'
import opendoor from '../assets/Opendoor-Logo.wine 1.svg'
import shopify from '../assets/Shopify-Logo.wine 1.svg'
import airbnb from '../assets/Airbnb-Logo.wine 1.svg'
import square from '../assets/square-vector-logo-2022 1.svg'
import doordash from '../assets/doordash-logo 1.svg'

const Trusted = () => {
  return (
    <div className='p-8'>
      <h1 className='hidden sm:block text-gray-900 text-4xl sm:text-5xl md:text-6xl font-light font-[Poppins, sans-serif] text-center'>Trusted By </h1>
      <ul className='hidden sm:inline-flex justify-center items-center gap-[23px] '>
        <li className='"w-[200px] h-[200px] relative'><img src={square} alt="" /></li>
        <li className='w-[150px] h-[150px] relative mt-6'><img src={amazon} alt="" /></li>
        <li className='w-[200px] h-[23.39px] relative'><img src={doordash} alt="" /></li>
        <li className="w-[200px] h-[133.08px] relative"><img src={opendoor} alt="" /></li>
        <li className="w-[200px] h-[133.61px] relative"><img src={shopify} alt="" /></li>
        <li className="w-[200px] h-[133.33px] relative"><img src={airbnb} alt="" /></li>
      </ul>
    </div>
  )
}

export default Trusted
