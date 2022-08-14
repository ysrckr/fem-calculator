import { FC } from 'react'
interface IProps {
	value: string
}
const Screen: FC<IProps> = ({ value }) => {
	return <span className='calc-result'>{value}</span>
}
export default Screen
