import React, { FC, MouseEventHandler, useState } from 'react'
import { FaJs } from 'react-icons/fa'

type Props = {
    tech: string
    toggleFilter: (tech: string) => void
}

const TechLogo: FC<Props> = ({ tech, toggleFilter }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        toggleFilter(tech)
    }

    return (
        <div
            className='w-[4rem] mb-2  lg:mb-0 cursor-pointer text-center duration-300 hover:scale-110 lg:w-20'
            onClick={handleClick}
        >
            <FaJs />
        </div>
    )
}
export default TechLogo
