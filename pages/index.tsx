import type { NextPage } from 'next'
import Image from 'next/future/image'
import headshot from '/public/images/placeholders/placeholder-headshot.png'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faFilePdf,
   faCode,
   faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

/*

   Note on Mac / OSX compatiblity:
   window.open() doesn't work
   try: location.href='link'

*/

const Home: NextPage = () => {
   const router = useRouter()

   return (
      <main className='page mt-10'>
         <Head>
            <title>tcloma.dev | Home</title>
         </Head>
         <section className='slide mt-10 gap-8'>
            <div className='block rounded-full lg:hidden' />
            <div className='flex w-full flex-col gap-4'>
               <div>
                  <h1 className='text-4xl font-semibold lg:text-7xl'>
                     Tyrone Cloma
                  </h1>
                  <h1 className='text-xl text-dCyan lg:text-3xl'>
                     Software Engineer
                  </h1>
               </div>
               <div className='text-md font-light lg:text-xl'>
                  <p>
                     Fullstack Developer based in New York & Flatiron Graduate
                  </p>
                  <p>I create responsive and efficient web applications</p>
               </div>

               <div className='flex w-full gap-2 text-xl lg:w-2/3'>
                  <button
                     onClick={() => router.push('/projects')}
                     className='homeBtn bg-dPurple hover:text-dPurple'
                  >
                     <FontAwesomeIcon
                        className='w-1/6 lg:w-1/12'
                        icon={faCode}
                     />
                     <span className='w-5/6 lg:w-11/12'>Projects</span>
                  </button>
                  <button
                     onClick={() => router.push('/contact')}
                     className='homeBtn bg-dBlue hover:text-dBlue'
                  >
                     <FontAwesomeIcon
                        className='w-1/6 text-3xl lg:w-1/12'
                        icon={faEnvelope}
                     />
                     <span className='w-5/6 lg:w-11/12'>Contact</span>
                  </button>
               </div>

               <div className='flex w-full flex-col gap-2 lg:w-2/3 lg:flex-row'>
                  <button
                     className='homeBtn w-full border-2 bg-transparent text-xl text-dWhite hover:text-dDbg lg:w-1/2'
                     onClick={() => {
                        window.open('/data/Tyrone_Cloma_Resume.pdf')
                     }}
                  >
                     <FontAwesomeIcon
                        className='w-1/12 text-2xl'
                        icon={faFilePdf}
                     />
                     <span className='w-11/12'>Resume</span>
                  </button>
                  <div className='flex w-full flex-row justify-between gap-4 rounded-md text-dBg lg:w-1/2'>
                     <div
                        onClick={() => {
                           window.open('https://github.com/tcloma')
                        }}
                        className='home-social-btn hover:bg-white hover:text-black'
                     >
                        <i className={'devicon-github-plain text-4xl'} />
                     </div>
                     <div
                        onClick={() => {
                           window.open(
                              'https://www.linkedin.com/in/tyronecloma/'
                           )
                        }}
                        className='home-social-btn hover:bg-[#0e76a8]'
                     >
                        <i className={'devicon-linkedin-plain text-4xl'} />
                     </div>
                     <div
                        onClick={() => {
                           window.open('https://twitter.com/TClomaDev')
                        }}
                        className='home-social-btn hover:bg-white hover:text-[#1DA1F2]'
                     >
                        <i className={'devicon-twitter-plain text-4xl'} />
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className='hidden rounded-full lg:block' /> */}
         </section>
      </main>
   )
}

export default Home
