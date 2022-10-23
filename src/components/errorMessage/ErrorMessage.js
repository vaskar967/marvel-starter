import img from './error.gif'

const ErrorMessage = () => {
	return (
		<img style={{ margin: '0 auto', width: '250px', height: '250px', display: 'block', objectFit: 'contain' }} src={img} alt="Error" />
	)
}

export default ErrorMessage