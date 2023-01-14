import { FC } from 'react'

interface IProps {
    icon: any
    text: string
    onClick?: any
}

const IconText: FC<IProps> = ({ icon, text, onClick }) => {
    return (
        <div onClick={onClick} className='social-chip'>
            <div className='w-1/12 text-2xl'>{icon}</div>
            <div className='flex w-11/12 cursor-pointer items-center justify-center'>
                <h1>{text}</h1>
            </div>
        </div>
    )
}
export default IconText
