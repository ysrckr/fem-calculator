import { FC } from 'react'
interface IProps {
	value: string
	theme: string
}
const Screen: FC<IProps> = ({ value, theme }) => {
	return <span className={'calc-result ' + theme}>{value}</span>
}
export default Screen
