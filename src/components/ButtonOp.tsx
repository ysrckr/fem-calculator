import { FC } from 'react'
import { ValueArg } from './ButtonNum'

type valueArgArr = number[] | ((a: number[]) => number[])

type Props = {
	value: string
	className: string
	theme: string
	screenValue: string
	setScreenValue: (value: ValueArg) => void
	result: number[]
	setResult: (value: valueArgArr) => void
}

const ButtonOp: FC<Props> = ({
	value,
	className,
	theme,
	screenValue,
	setScreenValue,
	result,
	setResult,
}) => {
	const addToResult = () => {
		const screenValueNumber = +screenValue.replace(/,/g, '')
		setResult(prev => [...prev, screenValueNumber])
		setScreenValue('')
	}
	const handleClick = () => {
        addToResult()
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
