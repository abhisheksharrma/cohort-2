import React from 'react'
import { projects1, projects10, projects11, projects12, projects13, projects14, projects15, projects16, projects17, projects2, projects3, projects4, projects5, projects6, projects7, projects8, projects9 } from '../assets'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {
  const projectImages = [
                          projects1,projects2,projects3,projects4,projects5,projects6,projects7,projects8,projects9,projects10,projects11,projects12,projects13,projects14,projects15,projects16,projects17
                        ]
  return (
    <div>
      <div className='pt-[45vh]'>
        <h2 className="font-[font-Lausanne-500] text-[9.5vw] uppercase">Projets<span>{projectImages.length}</span></h2>
      </div>
      <div className='-mt-20'>
        <div className='w-full h-full flex flex-wrap gap-4'>
        {
          projectImages.map((image, id) => {
          return <ProjectCard key={id} imageUrl={image} />
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Projects