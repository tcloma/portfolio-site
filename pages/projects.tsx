import { useReducer } from 'react'
import { NextPage } from 'next'
import { projectData, techStack } from '../public/data/projectData'
import ProjectCard from '../components/ProjectCard'
import TechLogo from '../components/TechLogo'
import techReducer from '../utils/techReducer'
import Head from 'next/head'

const Projects: NextPage = () => {
   const initialState = {
      filterTech: [],
   }
   const [state, dispatch] = useReducer(techReducer, initialState)

   const handleToggleClick = (techName: string) => {
      dispatch({ type: 'toggleFilter', payload: `${techName}` })
   }

   const filteredData = () => {
      if (state.filterTech.length !== 0) {
         return projectData.filter((project) =>
            project.stack.some((element) =>
               state.filterTech.includes(element.toLowerCase())
            )
         )
      } else {
         return projectData
      }
   }

   return (
      <main className='page justify-start pb-[20px] pt-[5rem] lg:justify-center lg:py-0'>
         <Head>
            <title>tcloma.dev | Projects</title>
         </Head>
         <h1 className='pb-5 text-3xl text-dCyan lg:text-5xl'>
            Project Filter
         </h1>
         <section className='flex w-[85%] flex-wrap items-center justify-evenly rounded-md border-2 p-2 lg:justify-between lg:p-4'>
            {techStack.map((tech, index) => (
               <TechLogo
                  key={index}
                  tech={tech}
                  toggleFilter={handleToggleClick}
               />
            ))}
         </section>
         <section className='flex w-[85%] flex-col flex-wrap items-center justify-center gap-10 pt-[20px] lg:flex-row lg:gap-4'>
            {filteredData().map((project, index) => (
               <ProjectCard key={index} projectData={project} />
            ))}
         </section>
      </main>
   )
}
export default Projects
