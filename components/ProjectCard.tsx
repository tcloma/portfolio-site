import { FC } from 'react'
import Image from 'next/future/image'
import { IProjData } from '../public/data/projectData'
import TechChip from './TechChip'
import { FaGithub, FaYoutube } from 'react-icons/fa'

interface IProps {
   projectData: IProjData
}

const ProjectCard: FC<IProps> = ({ projectData }) => {
   const { title, stack, description, previewLink, githubLink, demoLink } = projectData

   return (
      <article className='flex min-h-[32rem] w-[19rem] flex-col items-center justify-between rounded-md bg-dWhite pb-4 text-dBg shadow-md lg:w-96'>
         <div className='flex flex-col gap-4'>
            <Image
               src={previewLink}
               alt='Project preview'
               className='offset rounded-md shadow-sm shadow-gray-800'
               width={1920}
               height={1080}
            />
            <div className='flex flex-row flex-wrap justify-center gap-1'>
               {stack.map((tech, index) => (
                  <TechChip key={index} item={tech} />
               ))}
            </div>
         </div>
         <div className='px-4'>
            <h1 className='text-2xl font-bold text-dBg'> {title} </h1>
            <p>{description}</p>
         </div>
         <div className='flex h-12 w-[90%] gap-2'>
            <button
               onClick={() => window.open(githubLink)}
               className='project-btn'
            >
               <FaGithub className='w-1/6' />
               <span className='w-5/6'> Code </span>
            </button>
            {demoLink === '' ?
               <button className='grey-btn cursor-default text-gray-300'>
                  <FaYoutube className='w-1/6' />
                  <span className='w-5/6'> Demo </span>
               </button>
               :
               <button onClick={() => { window.open(demoLink) }} className='project-btn'>
                  <FaYoutube className='w-1/6' />
                  <span className='w-5/6'> Demo </span>
               </button>
            }
         </div>
      </article>
   )
}
export default ProjectCard
