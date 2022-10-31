import type { NextPage } from 'next'
import Image from 'next/future/image'
import headshot from '/public/images/placeholders/placeholder-headshot.png'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
   const router = useRouter()

   return (
      <main className='page'>
         <section className='slide mt-10 gap-8'>
            <Image
               className='block rounded-full lg:hidden'
               src={headshot}
               alt='headshot'
               width={250}
               height={250}
            />
            <div className='flex w-full flex-col gap-4'>
               <h1 className='text-5xl font-semibold lg:text-7xl'>
                  Tyrone Cloma
               </h1>
               <h1 className='text-lg text-dCyan lg:text-3xl'>
                  Software Engineer
               </h1>
               <div className='text-xl font-normal'>
                  <p>
                     Fullstack Developer based in NewYork ; Flatiron Graduate
                  </p>
                  <p>I create responsive and efficient web applications</p>
               </div>

               <div className='flex gap-2 text-xl'>
                  <button
                     onClick={() => router.push('/projects')}
                     className='rounded-md bg-dPurple py-2 px-8 font-semibold shadow-md hover:bg-dWhite hover:text-dPurple'
                  >
                     Projects
                  </button>
                  <button
                     onClick={() => router.push('/contact')}
                     className='rounded-md bg-dBlue py-2 px-8 font-semibold shadow-md hover:bg-dWhite hover:text-dBlue'
                  >
                     Contact Me
                  </button>
               </div>
            </div>
            <Image
               className='hidden rounded-full lg:block'
               src={headshot}
               alt='headshot'
               width={600}
               height={800}
            />
         </section>
         <section id='about' className='slide h-96'></section>
      </main>
   )
}

export default Home
