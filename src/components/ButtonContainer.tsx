import { FC } from 'react'
type Props = {
	children: JSX.Element | JSX.Element[]
    theme: string
}
const ButtonContainer: FC<Props> = ({ children, theme }) => {
	return <div className={'btn-container ' + theme}>{children}</div>
}
export default ButtonContainer
