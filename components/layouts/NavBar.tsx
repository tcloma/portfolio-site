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
      <nav className='fixed top-0 z-10 hidden min-h-screen w-[5rem] flex-col items-center justify-center bg-dDbg py-5 text-white lg:flex'>
         <div className='flex w-1/3 flex-col gap-10'>
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
