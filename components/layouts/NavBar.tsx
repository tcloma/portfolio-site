import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faCode } from '@fortawesome/free-solid-svg-icons'
import {
   faGithub,
   faLinkedin,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'

const NavBar: FC = () => {
   const router = useRouter()
   return (
      <nav className='fixed top-0 z-10 flex min-h-screen w-[5rem] flex-col items-center justify-between bg-dDbg py-5 text-white'>
         <h1 className='font text-5xl'> T </h1>
         <div className='flex w-1/3 flex-col gap-6'>
            <button className='navBtn' onClick={() => router.push('/')}>
               <FontAwesomeIcon icon={faHouse} />
            </button>
            <button className='navBtn' onClick={() => router.push('/projects')}>
               <FontAwesomeIcon icon={faCode} />
            </button>
            <button className='navBtn' onClick={() => router.push('/contact')}>
               <FontAwesomeIcon icon={faEnvelope} />
            </button>
         </div>
         <div className='flex w-[80%] flex-row justify-center gap-2'>
            <button className='socialBtn'>
               <FontAwesomeIcon icon={faGithub} />
            </button>
            <button className='socialBtn'>
               <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button className='socialBtn'>
               <FontAwesomeIcon icon={faTwitter} />
            </button>
         </div>
      </nav>
   )
}

export default NavBar
