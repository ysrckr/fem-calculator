import { FC } from 'react'
interface IProps {
	value: string[]
	theme: string
}
const Screen: FC<IProps> = ({ value, theme }) => {
	const displayValue = (value: string[]) => {
		if (value.length === 0) {
			return '0'
		} else if (value.length >= 3) {
			return value.join('').replace(/\B(?=(\d{3})+(?!\d))/g, ',') // https://stackoverflow.com/a/2901298/5343904 separates every 3 number with commas
		} else {
			return value.join('')
		}
	}
	return <span className={'calc-result ' + theme}>{displayValue(value)}</span>
}
export default Screen
