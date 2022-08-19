import { FC } from 'react'
interface IProps {
	value: string
	theme: string
}
const Screen: FC<IProps> = ({ value, theme }) => {
	const displayValue = (value: string) => {
		if (value.length < 8) {
			return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // https://stackoverflow.com/a/2901298/5343904 separates every 3 number with commas
		} else {
			return 'Error'
		}
	}
	return <span className={'calc-result ' + theme}>{displayValue(value)}</span>
}
export default Screen
