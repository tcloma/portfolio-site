import React, { FC, MouseEventHandler, useState } from 'react'

type Props = {
   tech: string
   toggleFilter: (tech: string) => void
}

const TechLogo: FC<Props> = ({ tech, toggleFilter }) => {
   const [clicked, setClicked] = useState(false)

   const checkIfExpress = (techName: string) => {
      switch (techName) {
         case 'express':
            return 'devicon-express-original'
         case 'electron':
            return 'devicon-electron-original'
         default:
            return `devicon-${techName}-plain`
      }
   }

   const handleClick = () => {
      setClicked(!clicked)
      toggleFilter(tech)
   }

   return (
      <div
         className='w-10 cursor-pointer text-center duration-300 hover:scale-110 lg:w-20'
         onClick={handleClick}
      >
         {clicked ? (
            <i
               className={`${checkIfExpress(
                  tech
               )} colored text-4xl lg:text-6xl`}
            />
         ) : (
            <i className={`${checkIfExpress(tech)} text-4xl lg:text-6xl`} />
         )}
      </div>
   )
}
export default TechLogo
