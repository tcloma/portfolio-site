import { FC, useState } from 'react'
import Image from 'next/future/image'
import { IProjData } from '../public/data/projectData'
import TechChip from './TechChip'

interface IProps {
   projectData: IProjData
}

const ProjectCard: FC<IProps> = ({ projectData }) => {
   const { title, stack, description, previewLink, demoLink } = projectData

   return (
      <article className='flex min-h-[30rem] w-96 flex-col gap-6 rounded-md bg-dWhite pb-4 text-dBg shadow-md'>
         <Image
            src={previewLink}
            alt='Project preview'
            onClick={() => window.open(demoLink)}
            className='offset cursor-pointer rounded-md shadow-sm shadow-gray-800'
            width={1920}
            height={1080}
         />
         <div className='flex flex-row flex-wrap justify-center gap-1'>
            {stack.map((tech, index) => (
               <TechChip key={index} item={tech} />
            ))}
         </div>
         <div className='px-4'>
            <h1 className='text-2xl font-bold text-black'> {title} </h1>
            <p>{description}</p>
         </div>
      </article>
   )
}
export default ProjectCard
