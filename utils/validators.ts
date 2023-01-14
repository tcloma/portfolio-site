import { formData } from './interfaces'
import { errorToast } from './toasts'

const isEmail = (email: string) => {
	return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

const isValidForm = (data: formData) => {
	const { name, email, subject, message } = data
	if (!name) return errorToast('Name field is empty')
	if (!subject) return errorToast('Subject field is empty')
	if (!message) return errorToast('Message field is empty')
	if (!email) {
		return errorToast('Email field is empty')
	} else if (!isEmail(email)) {
		return errorToast('Invalid email format')
	}
	return true
}

export { isValidForm }
