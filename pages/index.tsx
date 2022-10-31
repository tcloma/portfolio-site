import type { NextPage } from 'next'
import Image from 'next/future/image'
import headshot from '/public/images/placeholder_light.png'
import { useState } from 'react'

const Home: NextPage = () => {
   return (
      <main className='page scroll-smooth'>
         <section className='slide mt-10'>
            <div className='flex w-full flex-col gap-1'>
               <h1 className='text-5xl font-semibold lg:text-7xl'>
                  Tyrone Cloma
               </h1>
               <h3 className='text-lg text-dCyan lg:text-2xl'>
                  Software Engineer
               </h3>
               <div className='flex gap-1'>
                  <button className='rounded-md bg-dPurple py-2 px-4'>
                     Resume
                  </button>
                  <button className='rounded-md bg-dPurple py-2 px-4'>
                     Contact Me
                  </button>
               </div>
            </div>
            <Image
               className='hidden lg:block'
               src={headshot}
               alt='headshot'
               width={600}
               height={800}
            />
         </section>
         <section id='about' className='slide h-96'>
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
      </main>
   )
}

export default Home
