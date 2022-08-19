import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import ButtonNum from './components/ButtonNum'
import ButtonOp from './components/ButtonOp'
import Screen from './components/Screen'
import { FC, useState } from 'react'

export interface INumbers {
	first: number
	second: number
}

const App: FC = () => {
	const [screenValue, setScreenValue] = useState<string>('0')
	const [result, setResult] = useState<number>(0)
	const [numbers, setNumbers] = useState<INumbers>({
		first: 0,
		second: 0,
	})
	const [operator, setOperator] = useState<string>('')
	const [theme, setTheme] = useState<string>('th-1')
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
					<ButtonNum
						value="7"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="8"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="9"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonOp
						value="DEL"
						className="btn-delete"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonNum
						value="4"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="5"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="6"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonOp
						value="+"
						className="btn-num btn-plus"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonNum
						value="1"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="2"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="3"
						className="btn-num"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonOp
						value="-"
						className="btn-num btn-minus"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonNum
						value="."
						className="btn-num btn-point"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonNum
						value="0"
						className="btn-num btn-zero"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
					/>
					<ButtonOp
						value="/"
						className="btn-num btn-divide"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonOp
						value="x"
						className="btn-num btn-multiply"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonOp
						value="Reset"
						className="btn-reset"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
					<ButtonOp
						value="="
						className="btn-equal"
						theme={theme}
						setScreenValue={setScreenValue}
						screenValue={screenValue}
						setResult={setResult}
						result={result}
						setOperator={setOperator}
						operator={operator}
						setNumbers={setNumbers}
						numbers={numbers}
					/>
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
