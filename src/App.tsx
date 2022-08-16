import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import Button from './components/Button'
import Screen from './components/Screen'
import { useState } from 'react'

function App() {
	const [screenValue, setScreenValue] = useState<string[]>([])
	const [operationValue, setOperationValue] = useState<string>('')
	const [theme, setTheme] = useState('th-1')
	const add = () => {
		if (operationValue) {
			const result = parseFloat(screenValue.join('')) + parseFloat(operationValue)
			setScreenValue([result.toString()])
		} else {
			setOperationValue(screenValue.join(''))
			setScreenValue([])
		}
	}
	return (
		<>
			<Container theme={theme}>
				<div className={'title-container ' + theme}>
					<h1 className="title">Calc</h1>
					<div className="theme-selector-container">
						<span className="theme-title">THEME</span>
						<div className="theme-selector">
							<span
								className={
									'selector-one ' +
									(theme === 'th-1' ? 'active' : '')
								}
								onClick={() => setTheme('th-1')}></span>
							<span
								className={
									'selector-two ' +
									(theme === 'th-2' ? 'active' : '')
								}
								onClick={() => setTheme('th-2')}></span>
							<span
								className={
									'selector-three ' +
									(theme === 'th-3' ? 'active' : '')
								}
								onClick={() => setTheme('th-3')}></span>
						</div>
					</div>
				</div>
				<Screen value={screenValue} theme={theme} />
				<ButtonContainer theme={theme}>
					<Button
						value="7"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="8"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="9"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="DEL"
						className="btn-delete"
						theme={theme}
						screenValue={setScreenValue}
						type="delete"
					/>
					<Button
						value="4"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="5"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="6"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="+"
						className="btn-num btn-plus"
						theme={theme}
						screenValue={setScreenValue}
						type="plus"
						operation={add}
					/>
					<Button
						value="1"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="2"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="3"
						className="btn-num"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>
					<Button
						value="-"
						className="btn-num btn-minus"
						theme={theme}
						screenValue={setScreenValue}
						type="minus"
					/>
					<Button
						value="."
						className="btn-num btn-point"
						theme={theme}
						screenValue={setScreenValue}
						type="point"
					/>
					<Button
						value="0"
						className="btn-num btn-zero"
						theme={theme}
						screenValue={setScreenValue}
						type="num"
					/>

					<Button
						value="/"
						className="btn-num btn-divide"
						theme={theme}
						screenValue={setScreenValue}
						type="divide"
					/>
					<Button
						value="x"
						className="btn-num btn-multiply"
						theme={theme}
						screenValue={setScreenValue}
						type="multiply"
					/>
					<Button
						value="Reset"
						className="btn-reset"
						theme={theme}
						screenValue={setScreenValue}
						type="reset"
					/>
					<Button
						value="="
						className="btn-equal"
						theme={theme}
						screenValue={setScreenValue}
						type="equal"
					/>
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
