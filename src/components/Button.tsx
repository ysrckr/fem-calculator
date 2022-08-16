import { FC } from 'react'

type Props = {
	value: string
	className: string
	theme: string
	screenValue?: any
}
const Button: FC<Props> = ({ value, className, theme, screenValue }) => {
	return (
		<span
			className={'btn ' + className + ' ' + theme}
			onClick={() => {
				screenValue((prev: string[]) => [...prev, value])
			}}>
			{value}
		</span>
	)
}
export default Button
