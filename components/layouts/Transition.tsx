import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

interface IProps {
   children: any
}

const Transition: FC<IProps> = ({ children }) => {
   const { asPath } = useRouter()
   const variants = {
      out: {
         opacity: 0,
         y: 40,
         transition: {
            duration: 0.5,
         },
      },
      in: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            delay: 0.25,
         },
      },
   }

   return (
      <AnimatePresence initial={false} mode='wait'>
         <motion.div
            key={asPath}
            variants={variants}
            animate='in'
            initial='out'
            exit='out'
         >
            {children}
         </motion.div>
      </AnimatePresence>
   )
}

export default Transition
