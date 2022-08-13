import { FC } from 'react'
type Props = {
	children: JSX.Element | JSX.Element[]
}
const ButtonContainer: FC<Props> = ({ children }) => {
	return <div className='btn-container'>{children}</div>
}
export default ButtonContainer
