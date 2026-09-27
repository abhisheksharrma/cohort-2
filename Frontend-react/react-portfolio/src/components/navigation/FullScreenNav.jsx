import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { linkhover1img1, linkhover1img2 } from '../../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {

    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // console.log(navOpen)
    
      useGSAP(function(){
        const tl = gsap.timeline()
        // tl.to("#fullscreennav",{
        //     display: "block",

        // })
        tl.from(".stair-ing", {
            height: 0,
            stagger: {
              amount: -0.2
            }
        })
        tl.from("fullNavLinkRef.current", {
            opacity: 0,
        })
        tl.from(".nav-link", {
            opacity: 0,
            rotateX: 90,
            stagger: {
              amount: 0.2
            }
        })
        tl.pause()

        if(navOpen) {
            fullScreenRef.current.style.display= "block"
            tl.play()
        }else {
            fullScreenRef.current.style.display= "none"
            tl.reverse()
        }
    
      }, [navOpen])


  return (
    <div id='fullscreennav' ref={fullScreenRef} className=' w-full h-screen bg-black absolute inset-0 top-0 z-50'>
        <div className='w-full h-screen fixed top-0'>
                <div className="w-full h-full flex">
                    <div className="stair-ing h-full w-1/5 bg-black"></div>
                    <div className="stair-ing h-full w-1/5 bg-black"></div>
                    <div className="stair-ing h-full w-1/5 bg-black"></div>
                    <div className="stair-ing h-full w-1/5 bg-black"></div>
                    <div className="stair-ing h-full w-1/5 bg-black"></div>
                </div>
        </div>
        <div ref={fullNavLinkRef} className='w-full h-screen flex absolute top-0'>
            <div className="w-full flex justify-between absolute top-0 z-10">
                <div className='w-60 p-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                        <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
                <div className="h-24 w-24 relative cursor-pointer mr-3 mt-3">
                    <div className='h-34 w-1 absolute bg-white -rotate-45 origin-top'></div>
                    <div className='h-34 w-1 absolute right-0 bg-white rotate-45 origin-top'></div>
                </div>
            </div>
            <div className='flex h-full w-full items-center'>
                <div className="link-wrapper w-full ">
                    <div className='nav-link origin-top w-full border-t font-[font-Lausanne-500] relative cursor-pointer'>
                        <Link to="/projects" className='text-center w-full block text-[8vw] leading-20 pt-10 pb-3 uppercase'>Projets</Link>
                        <div className="link-hover absolute h-full flex  top-0 bg-[#D3FD50] text-black">
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-link origin-top w-full border-t font-[font-Lausanne-500] relative cursor-pointer'>
                        <Link to="/projects" className='text-center w-full block text-[8vw] leading-20 pt-10 pb-3 uppercase'>Agence</Link>
                        <div className="link-hover absolute h-full flex  top-0 bg-[#D3FD50] text-black">
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-link origin-top w-full border-t font-[font-Lausanne-500] relative cursor-pointer'>
                        <Link to="/projects" className='text-center w-full block text-[8vw] leading-20 pt-10 pb-3 uppercase'>Contact</Link>
                        <div className="link-hover absolute h-full flex  top-0 bg-[#D3FD50] text-black">
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-link origin-top w-full border-y font-[font-Lausanne-500] relative cursor-pointer'>
                        <Link to="/projects" className='text-center w-full block text-[8vw] leading-20 pt-10 pb-3 uppercase'>Blogue</Link>
                        <div className="link-hover absolute h-full flex  top-0 bg-[#D3FD50] text-black">
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                            <div className="moveX flex h-full items-center">
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img1} alt="" />
                                </div>
                                <div className='text-[8vw] leading-[0.8] uppercase whitespace-nowrap pt-3'> Pour tout voir </div>
                                <div className="link-img w-64 h-24 shrink-0 rounded-full overflow-hidden inline-flex items-center">
                                    <img className='w-full h-full object-cover shrink-0' src={linkhover1img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav