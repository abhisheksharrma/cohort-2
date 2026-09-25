import React from 'react'
import Video from '../components/home/Video'
import HeroHeading from '../components/home/HeroHeading'
import HeroAction from '../components/home/HeroAction'

const Home = () => {
  return (
    <>
        <div className='w-screen h-screen fixed'>
            <Video />
        </div>
        <div className='h-screen w-screen flex flex-col justify-between pt-5 overflow-hidden pb-5 relative'>
            <HeroHeading />
            <HeroAction />
        </div>
    </>
  )
}

export default Home