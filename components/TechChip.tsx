import { FC } from 'react'

interface IProps {
   item: string
}

const TechChip: FC<IProps> = ({ item }) => {
   return (
      <div className='rounded-md bg-dBg py-1 px-2 text-white'>
         <h1> {item} </h1>
      </div>
   )
}

export default TechChip
