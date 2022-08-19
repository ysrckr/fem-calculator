import { FC } from 'react'

export type ValueArg = string | ((a: string) => string)

type Props = {
	value: string
	className: string
	theme: string
	screenValue: string
	setScreenValue: (value: ValueArg) => void
}
const ButtonNum: FC<Props> = ({
	value,
	className,
	theme,
	setScreenValue,
	screenValue,
}) => {
	const handleClick = () => {
		if (screenValue !== '0') {
			setScreenValue(prev => prev + value)
			return
		}
		setScreenValue(value)
	}
	return (
		<span
			className={'btn ' + className + ' ' + theme}
			onClick={handleClick}>
			{value}
		</span>
	)
}
export default ButtonNum
