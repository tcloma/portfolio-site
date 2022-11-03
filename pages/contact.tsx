import { NextPage } from 'next'
import { FormEvent } from 'react'
import IconText from '../components/IconText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faAt,
   faFilePdf,
   faLocationDot,
   faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
   faGithub,
   faLinkedin,
   faTwitter,
   faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Contact: NextPage = () => {
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
   }

   return (
      <main className='page pt-[20px] lg:flex-row lg:justify-evenly lg:pt-0 '>
         <section className='half-section gap-4 bg-dBg'>
            <h1 className='text-5xl font-semibold text-dCyan'> Contact Me </h1>
            <form className='relative flex w-[85%] flex-col gap-4 text-black lg:w-auto'>
               <div className='flex flex-row gap-3'>
                  <input className='input-field w-1/2' placeholder='Name' />
                  <input className='input-field w-1/2' placeholder='Email' />
               </div>
               <input className='input-field' placeholder='Subject' />
               <textarea
                  className='input-field min-h-[20rem]'
                  placeholder='Message'
               />
               <button
                  onClick={(e) => handleSubmit(e)}
                  className='w-full rounded-md bg-dCyan p-4 text-dBg'
               >
                  Submit
               </button>
            </form>
         </section>

         <section className='half-section gap-4 bg-dOffBg'>
            <IconText
               icon={<FontAwesomeIcon icon={faLocationDot} />}
               text='New York, NY'
            />
            <IconText
               icon={<FontAwesomeIcon icon={faPhone} />}
               text='929 - 398 - 1598'
            />
            <IconText
               icon={<FontAwesomeIcon icon={faAt} />}
               text='tyrone.cloma0219@gmail.com'
            />
            <IconText
               icon={<FontAwesomeIcon icon={faFilePdf} />}
               text='Resume'
               onClick={() => window.open('/data/Tyrone_Cloma_Resume.pdf')}
            />
            <div className='flex w-[20rem] flex-row justify-between rounded-md text-dBg'>
               <div
                  onClick={() => window.open('https://github.com/tcloma')}
                  className='social-btn'
               >
                  <FontAwesomeIcon icon={faGithub} />
               </div>
               <div
                  onClick={() =>
                     window.open('https://www.linkedin.com/in/tyronecloma/')
                  }
                  className='social-btn'
               >
                  <FontAwesomeIcon icon={faLinkedin} />
               </div>
               <div
                  onClick={() => window.open('https://twitter.com/TClomaDev')}
                  className='social-btn'
               >
                  <FontAwesomeIcon icon={faTwitter} />
               </div>
               <div
                  onClick={() =>
                     window.open(
                        'https://www.youtube.com/channel/UC3If51Uhyyqg4WbN8QrUulw/featured'
                     )
                  }
                  className='social-btn'
               >
                  <FontAwesomeIcon icon={faYoutube} />
               </div>
            </div>
         </section>
      </main>
   )
}
export default Contact
