import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faCode } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const NavBar: FC = () => {
   const router = useRouter()

   const checkPage = (btn: string) => {
      if (router.pathname === btn) {
         return 'navBtnClicked'
      } else {
         return 'navBtn'
      }
   }

   return (
      <nav className='fixed top-0 z-10 flex w-full flex-row items-center justify-center bg-dDbg py-5 text-white lg:min-h-screen lg:w-[5rem] lg:flex-col'>
         <div className='flex w-1/3 flex-row items-center justify-center gap-10 lg:flex-col'>
            <button className={checkPage('/')} onClick={() => router.push('/')}>
               <FontAwesomeIcon icon={faHouse} />
            </button>
            <button
               className={checkPage('/projects')}
               onClick={() => router.push('/projects')}
            >
               <FontAwesomeIcon icon={faCode} />
            </button>
            <button
               className={checkPage('/contact')}
               onClick={() => router.push('/contact')}
            >
               <FontAwesomeIcon icon={faEnvelope} />
            </button>
         </div>
         {/* <div /> */}
      </nav>
   )
}

export default NavBar
