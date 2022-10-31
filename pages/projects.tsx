import { NextPage } from 'next'
import { projectData } from '../public/data/projectData'
import ProjectCard from '../components/ProjectCard'

const Projects: NextPage = () => {
   return (
      <main className='page'>
         <section className='flex w-full justify-center gap-4'>
            {projectData.map((project, index) => (
               <ProjectCard key={index} projectData={project} />
            ))}
         </section>
      </main>
   )
}
export default Projects
