import { FC } from 'react'

type Props = {
	children: JSX.Element | JSX.Element[]
	theme: string
}
const Container: FC<Props> = ({ children, theme }) => {
	return <div className={'container ' + theme}>{children}</div>
}
export default Container
