import { FC } from 'react'

type Props = {
	children: JSX.Element | JSX.Element[]
}
const Container: FC<Props> = ({ children }) => {
	return <div className="container">{children}</div>
}
export default Container
