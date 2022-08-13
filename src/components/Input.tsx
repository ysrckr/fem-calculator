import { FC } from 'react'
interface IProps {
	value: string
}
const Input: FC<IProps> = ({ value }) => {
	return <input type="text" value={value} className="calc-display" />
}
export default Input
