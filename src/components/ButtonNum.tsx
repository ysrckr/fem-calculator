import { FC } from 'react'
import { IAction, IState } from '../App'


type Props = {
	state: IState
	className: string
	theme: string
	value: string
	dispatch: (action: IAction) => void
}
const ButtonNum: FC<Props> = ({ value, className, theme, state, dispatch }) => {
	const handleClick = () => {}
	return (
		<span
			className={'btn ' + className + ' ' + theme}
			onClick={handleClick}>
			{value}
		</span>
	)
}
export default ButtonNum
