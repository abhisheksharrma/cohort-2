import React from 'react'
import Video from './Video'

const HeroHeading = () => {
  return (
    <div className='font-[font-Lausanne-300]'>
        <div className='text-[9.5vw] flex justify-center items-center leading-[9vw] uppercase'>L'étincelle</div>
        <div className='text-[9.5vw] flex justify-center items-center leading-[9vw] uppercase'>qui
            <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'>
                <Video />
            </div>
            génère
            </div>
        <div className='text-[9.5vw] flex justify-center items-center leading-[9vw] uppercase'>la créativité</div>
    </div>
  )
}

export default HeroHeading