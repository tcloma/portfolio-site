import { FC } from 'react'
import Image from 'next/future/image'
import { IProjData } from '../public/data/projectData'
import projectPreview from '/public/images/placeholder_black.png'

interface IProps {
   projectData: IProjData
}

const ProjectCard: FC<IProps> = ({ projectData }) => {
   const { title, stack, description, previewLink, demoLink } = projectData

   return (
      <article className='flex min-h-[24rem] w-96 flex-col gap-4 rounded-md bg-dWhite pb-4 text-dBg'>
         <Image
            src={projectPreview}
            alt='Project preview'
            className='offset rounded-md shadow-sm shadow-gray-800'
         />
         <div className='px-4'>
            <h1 className='text-2xl font-bold text-black'> {title} </h1>
            <p>{description}</p>
         </div>
      </article>
   )
}
export default ProjectCard
