import { FC } from 'react'

type Props = {
	value: string
	className: string
	theme: string
}
const Button: FC<Props> = ({ value, className, theme }) => {
	return <span className={'btn ' + className + ' ' + theme}>{value}</span>
}
export default Button
