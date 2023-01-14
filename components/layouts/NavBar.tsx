import { FC } from 'react'
import { FaEnvelope, FaHome, FaCode } from 'react-icons/fa'
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
                    <FaHome />
                </button>
                <button
                    className={checkPage('/projects')}
                    onClick={() => router.push('/projects')}
                >
                    <FaCode />
                </button>
                <button
                    className={checkPage('/contact')}
                    onClick={() => router.push('/contact')}
                >
                    <FaEnvelope />
                </button>
            </div>
            {/* <div /> */}
        </nav>
    )
}

export default NavBar
