import React from 'react'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='w-full h-screen bg-black absolute inset-0 top-0 z-10'>
        <div id='all-links' className='flex h-full items-center'>
            <div className="link-wrapper w-full ">
                <div className='nav-link w-full border-t font-[font-Lausanne-500]'>
                    <Link to="/projects" className='text-center w-full block text-8xl leading-20 pt-3 uppercase'>Projets</Link>
                    {/* <div className="link-hover">
                        <div className="link-img">
                            <img src="" alt="" />
                        </div>
                        <div>Pour tout voir</div>
                    </div> */}
                </div>
                <div className='nav-link w-full border-t font-[font-Lausanne-500]'>
                    <Link to="/projects" className='text-center w-full block text-8xl leading-20 pt-3 uppercase'>Agence</Link>
                    {/* <div className="link-hover">
                        <div className="link-img">
                            <img src="" alt="" />
                        </div>
                        <div>Pour tout voir</div>
                    </div> */}
                </div>
                <div className='nav-link w-full border-t font-[font-Lausanne-500]'>
                    <Link to="/projects" className='text-center w-full block text-8xl leading-20 pt-3 uppercase'>Contact</Link>
                    {/* <div className="link-hover">
                        <div className="link-img">
                            <img src="" alt="" />
                        </div>
                        <div>Pour tout voir</div>
                    </div> */}
                </div>
                <div className='nav-link w-full border-y font-[font-Lausanne-500]'>
                    <Link to="/projects" className='text-center w-full block text-8xl leading-20 pt-3 uppercase'>Blogue</Link>
                    {/* <div className="link-hover">
                        <div className="link-img">
                            <img src="" alt="" />
                        </div>
                        <div>Pour tout voir</div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav