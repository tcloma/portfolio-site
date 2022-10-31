import { FC } from 'react'
import NavBar from './NavBar'

interface IProps {
   children: any
}

const Layout: FC<IProps> = ({ children }) => {
   return (
      <>
         <NavBar />
         {children}
      </>
   )
}

export default Layout
