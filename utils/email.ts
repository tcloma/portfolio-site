import emailjs from '@emailjs/browser'
import { formData } from './interfaces'

function sendEmail(formData: formData) {
   const { subject, name, email, message } = formData
   emailjs.send(
      'service_lpzagkr',
      'template_6dvfk2n',
      {
         subject: subject,
         name: name,
         email: email,
         message: message,
      },
      'JAefZSs4D0obqDO3r'
   )
}

export { sendEmail }
