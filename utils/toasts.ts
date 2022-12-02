import { toast } from 'react-hot-toast'

const errorToast = (message: string) => {
   toast.error(message, {
      position: 'bottom-center',
      style: {
         backgroundColor: '#1c1d26',
         color: '#FFFFFF',
      },
   })
}

const successToast = (message: string) => {
   toast.success(message, {
      position: 'bottom-center',
      style: {
         backgroundColor: '#1c1d26',
         color: '#FFFFFF',
      },
   })
}

export { errorToast, successToast }
