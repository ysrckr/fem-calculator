import { FC } from 'react'
import { Action, IState } from '../types/reducerTypes'

type Props = {
	state: IState
	className: string
	theme: string
	value: string
	dispatch: (action: Action) => void
}
const ButtonNum: FC<Props> = ({ value, className, theme, state, dispatch }) => {
	const handleClick = () => {
		dispatch({ type: 'SET_SCREEN_VALUE', payload: value })
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
