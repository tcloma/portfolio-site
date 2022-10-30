import { FC, useState } from 'react'
import Image from 'next/future/image'
import TechChip from './TechChip'

import { IProjData } from '../public/data/projectData'
import projectPreview from '/public/images/placeholder.png'
import demoPreview from '/public/images/placeholder_light.png'

interface IProps {
   projectData: IProjData
}

const ProjectShowcase: FC<IProps> = ({ projectData }) => {
   const { title, stack, description, previewLink, demoLink } = projectData
   const [showDemo, setShowDemo] = useState(false)

   return (
      <article className='slide min-w-full gap-4 py-10'>
         <div className='flex w-full flex-col gap-2 lg:w-1/3'>
            <div className='flex flex-row justify-evenly border-t-2 p-2'>
               <button onClick={() => setShowDemo(false)}> Preview </button>
               <button onClick={() => setShowDemo(true)}> Demo </button>
            </div>
            {showDemo ? (
               <Image
                  src={demoPreview}
                  alt='project demo'
                  width={1920}
                  height={1080}
               />
            ) : (
               <Image
                  src={projectPreview}
                  alt='project preview'
                  width={1920}
                  height={1080}
               />
            )}
         </div>
         <div className='flex w-full flex-col gap-2 lg:w-2/3'>
            <h1 className='text-4xl text-red-400'>{title}</h1>
            <div className='flex flex-row gap-2'>
               {stack.map((item, index) => {
                  return <TechChip key={index} item={item} />
               })}
            </div>
            <p>{description}</p>
         </div>
      </article>
   )
}

export default ProjectShowcase
