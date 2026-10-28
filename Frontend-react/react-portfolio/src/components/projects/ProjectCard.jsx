import React from 'react'

const ProjectCard = ({imageUrl}) => {
  return (
        <> 
            <div className='w-[calc(50%-0.5rem)] group transition-all hover:rounded-4xl relative overflow-hidden h-150 duration-300'>
                <img className="w-full h-full object-cover" src={imageUrl} alt="" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
                    <h4 className='uppercase text-white font-[font-Lausanne-500] text-6xl px-5 pt-2 border-2 rounded-full cursor-pointer'>vior le projet</h4>
                </div>
            </div>
        </>
  )
}

export default ProjectCard