import type { NextPage } from 'next'
import Image from 'next/future/image'
import headshot from '/public/images/placeholder_light.png'
import ProjectShowcase from '../components/ProjectShowcase'
import { projectData } from '../public/data/projectData'
import { useState } from 'react'

const Home: NextPage = () => {
   // Colorizing nav bar
   const [section, setSection] = useState('about')
   const nav = ['About', 'Project', 'Socials']

   return (
      <main className='page scroll-smooth'>
         <section className='slide mt-10'>
            <div>
               <h1 className='text-7xl font-semibold'> Tyrone Cloma </h1>
               <h3 className='text-2xl text-dCyan'> Software Engineer </h3>
            </div>
            <Image src={headshot} alt='headshot' width={600} height={800} />
         </section>

         <nav className='min-h-10 sticky top-0 flex min-w-full items-center justify-start border-b-2 bg-dBg px-[10%] lg:flex-row lg:px-[15%]'>
            <a href='#about' className='navBtn'>
               About
            </a>
            <a href='#projects' className='navBtn'>
               Projects
            </a>
            <a href='#socials' className='navBtn'>
               Socials
            </a>
         </nav>

         <section id='about' className='slide h-96 bg-dWhite text-dBg'>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cupiditate accusantium ut in odit corrupti explicabo quidem sit
               voluptate, esse ducimus. Dolorum rem ut optio ea doloremque est
               laborum totam sit. Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Reiciendis, quo maxime molestiae magnam magni
               tempora doloribus quas eaque nam sint labore minima unde omnis a
               reprehenderit natus doloremque dicta illo. Lorem ipsum, dolor sit
               amet consectetur adipisicing elit. Ratione aliquam veritatis a.
               Cum, rem laudantium laborum molestias et consequatur dolores eius
               iure ea delectus sunt ex officia perferendis suscipit quaerat.
            </p>
         </section>

         <section id='projects' className='flex min-w-full flex-col'>
            {projectData.map((project, index) => (
               <ProjectShowcase key={index} projectData={project} />
            ))}
         </section>

         <section id='socials'>
            <div>
               <button> Github </button>
               <button> Twitter </button>
            </div>
            <div>
               <button> LinkedIn </button>
               <button> Resume </button>
            </div>
         </section>

         <section></section>
      </main>
   )
}

export default Home
