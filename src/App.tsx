import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import Button from './components/Button'
import Screen from './components/Screen'
import { FC, useState } from 'react'

const App: FC = () => {
	const [screenValue, setScreenValue] = useState<string[]>([])
	const [result, setResult] = useState<string[]>([])
	const [theme, setTheme] = useState<string>('th-1')
	const add = () => {}
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
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="8"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="9"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="DEL"
						className="btn-delete"
						theme={theme}
						type="delete"
						setValue={setScreenValue}
					/>
					<Button
						value="4"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="5"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="6"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="+"
						className="btn-num btn-plus"
						theme={theme}
						type="plus"
						setValue={setScreenValue}
					/>
					<Button
						value="1"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="2"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="3"
						className="btn-num"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>
					<Button
						value="-"
						className="btn-num btn-minus"
						theme={theme}
						type="minus"
						setValue={setScreenValue}
					/>
					<Button
						value="."
						className="btn-num btn-point"
						theme={theme}
						type="point"
						setValue={setScreenValue}
					/>
					<Button
						value="0"
						className="btn-num btn-zero"
						theme={theme}
						type="num"
						setValue={setScreenValue}
					/>

					<Button
						value="/"
						className="btn-num btn-divide"
						theme={theme}
						type="divide"
						setValue={setScreenValue}
					/>
					<Button
						value="x"
						className="btn-num btn-multiply"
						theme={theme}
						type="multiply"
						setValue={setScreenValue}
					/>
					<Button
						value="Reset"
						className="btn-reset"
						theme={theme}
						type="reset"
						setValue={setScreenValue}
					/>
					<Button
						value="="
						className="btn-equal"
						theme={theme}
						type="equal"
						setValue={setScreenValue}
					/>
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
