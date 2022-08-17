import { FC } from 'react'

type ValueArg = string[] | ((a: string[]) => string[])

type Props = {
	value: string
	className: string
	theme: string
	type: string
	setValue: (value: ValueArg) => void
}
const Button: FC<Props> = ({ value, className, theme, type, setValue }) => {
	const handleClick = () => {
		switch (type) {
			case 'num':
				setValue((prev: string[]) => [...prev, value])
				break
			case 'point':
				break
			case 'plus':
				break
			case 'minus':
				break
			case 'divide':
				break
			case 'multiply':
				break
			case 'equal':
				break
			case 'reset':
				break
			case 'delete':
				break
			default:
				throw new Error('Unknown type')
		}
	}
	return (
		<span
			className={'btn ' + className + ' ' + theme}
			onClick={handleClick}>
			{value}
		</span>
	)
}
export default Button
