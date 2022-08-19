import { FC } from 'react'
import { ValueArg } from './ButtonNum'
import { INumbers } from '../App'

type Props = {
	value: string
	className: string
	theme: string
	screenValue: string
	setScreenValue: (value: ValueArg) => void
	result: number
	setResult: (value: number) => void
	operator: string
	setOperator: (value: string) => void
	numbers: INumbers
	setNumbers: (value: INumbers) => void
}

const ButtonOp: FC<Props> = ({
	value,
	className,
	theme,
	screenValue,
	setScreenValue,
	result,
	setResult,
	operator,
	setOperator,
	numbers,
	setNumbers,
}) => {
	const add = () => {
		const screenValueNumber = +screenValue.replace(/,/g, '')
		setScreenValue('')
	}
	const handleClick = () => {
		switch (value) {
			case '+':
				break
			default:
				break
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
export default ButtonOp
