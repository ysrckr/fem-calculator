import { FC } from 'react'
import { IAction, IState } from '../App'

type Props = {
	value: string
	className: string
	theme: string
	state: IState
	dispatch: (action: IAction) => void
}

const ButtonOp: FC<Props> = ({ value, className, theme, state, dispatch }) => {
	const handleClick = () => {}
	return (
		<span
			className={'btn ' + className + ' ' + theme}
			onClick={handleClick}>
			{value}
		</span>
	)
}
export default ButtonOp
