import { FC } from 'react'

type Props = {
	value: string
	className: string
	theme: string
	type: string
	screenValue: any
	operation?: any
}
const Button: FC<Props> = ({
	value,
	className,
	theme,
	screenValue,
	type,
	operation,
}) => {
	const handleClick = () => {
		switch (type) {
			case 'num':
				screenValue((prev: string[]) => [...prev, value])
				break
			case 'point':
				screenValue((prev: string[]) => [...prev, '.'])
				break
			case 'plus':
				operation()
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
				screenValue([])
				break
			case 'delete':
				screenValue((prev: string[]) => prev.slice(0, -1))
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
