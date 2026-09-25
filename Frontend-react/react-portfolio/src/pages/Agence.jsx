import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { person1, person2, person3, person4, person5, person6, person7, person8 } from '../assets'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

const imgAnimationSecionFirst = useRef(null)
const imgLoopRef = useRef(null)

const imgArray = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
]

gsap.registerPlugin(ScrollTrigger);
useGSAP(function(){
    gsap.to(imgAnimationSecionFirst.current,{
        scrollTrigger: {
            trigger: imgAnimationSecionFirst.current,
            markers: true,
            start: "top 0%",
            end: "top -140%",
            pin: true,
            pinSpacing: true,
            pinReparent: true,
            pinType: 'transform',
            // scrub: 1, 
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: function (el) {
                let imgIndex;
                el.progress < 1 
                ? imgIndex = Math.floor(el.progress * imgArray.length)    
                : imgIndex = imgArray.length-1
                
                imgLoopRef.current.src = imgArray[imgIndex]
            }
        }
    })
})

  return (
    
        <div className="agence-page">
            <div className='agense-section-1 relative top-0 py-1'>
                <div ref={imgAnimationSecionFirst} className='absolute overflow-hidden rounded-4xl w-[15vw] h-[20vw] top-0 ml-[30vw]'>
                    <img ref={imgLoopRef} className='w-full h-full object-cover' src={person1} alt="person 1" />
                </div>
                <div className='relative font-[font-Lausanne-500]'>
                    <div className='mt-[55vh]'>
                        <h1 className='text-[20vw] uppercase text-center leading-[18vw]'>Soixan7e <br /> Douze</h1>
                    </div>
                    <div className='w-full flex gap-2 pb-[60vh]'>
                        <div className="flex-1/4">
                        </div>
                        <div className="flex-1/2 text-[3vw] leading-[3vw] indent-70 font-[font-Lausanne-300] pl-15">
                            <p>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='agense-section-2 h-screen'>

            </div> */}
        </div>
  )
}

export default Agence