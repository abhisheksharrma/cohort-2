import React from 'react'
import { Link } from 'react-router-dom'

const HeroAction = () => {
  return (
    <>
        <div className="hero-action flex items-center justify-center gap-5 font-[font-Lausanne-500]">
            <div className='h-28 flex items-center border-4 rounded-full hover:border-[#D3FD50] transition-all duration-300'>
                <Link className='mt-5 text-[6vw] leading-30 uppercase font-medium  px-8 hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300' to="/projects">Projets</Link>
            </div>
            <div className='h-28 flex items-center border-4 rounded-full hover:border-[#D3FD50] transition-all duration-300'>
                <Link className='mt-5 text-[6vw] leading-30 uppercase font-medium px-8 hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300' to="/agence">Agence</Link>
            </div>
        </div>
    </>
  )
}

export default HeroAction