import { FC } from 'react'
import { Action, IState } from '../types/reducerTypes'

type Props = {
	value: string
	className: string
	theme: string
	state: IState
	dispatch: (action: Action) => void
}

const ButtonOp: FC<Props> = ({ value, className, theme, state, dispatch }) => {
	const handleClick = () => {
		switch (value) {
			case '+':
				dispatch({ type: 'ADD' })
				break
			case '-':
				dispatch({ type: 'SUBTRACT' })
				break
			case 'x':
				dispatch({ type: 'MULTIPILY' })
				break
			case '/':
				dispatch({ type: 'DIVIDE' })
				break
			case '=':
				dispatch({ type: 'EQUAL' })
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
