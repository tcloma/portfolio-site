import { NextPage } from 'next'
import { projectData } from '../public/data/projectData'
import ProjectCard from '../components/ProjectCard'

const Projects: NextPage = () => {
   return (
      <main className='page py-[20px] lg:py-0'>
         <section className='flex w-[90%] flex-col flex-wrap items-center justify-center gap-10 pt-[5rem] lg:flex-row lg:gap-4'>
            {projectData.map((project, index) => (
               <ProjectCard key={index} projectData={project} />
            ))}
         </section>
      </main>
   )
}
export default Projects
