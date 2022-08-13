import { FC } from 'react'

type Props = {
	value: string
	className: string
}
const Button: FC<Props> = ({ value: value, className: className }) => {
	return <span className={`btn ${className}`}>{value}</span>
}
export default Button
