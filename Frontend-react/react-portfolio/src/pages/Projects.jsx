import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='pt-[45vh]'>
        <h2 className="font-[font-Lausanne-500] text-[9.5vw] uppercase">Projets</h2>
      </div>
      <div className='-mt-20'>
        <div className='w-full h-200 flex gap-4'>
          <div className='w-1/2 hover:rounded-4xl overflow-hidden h-full bg-green-500 duration-300'>
            <img className="w-full h-full object-cover" src="" alt="" />
            Projects 1
          </div>
          <div className='w-1/2 hover:rounded-4xl overflow-hidden h-full bg-red-500 duration-300'>
            <img className="w-full h-full object-cover" src="" alt="" />
            Projects 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects