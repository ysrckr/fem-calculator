import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import Button from './components/Button'
import Screen from './components/Screen'
import { useState } from 'react'

function App() {
	const [screenValue, setScreenValue] = useState('')
	return (
		<>
			<Container>
				<div className="title">
					<h1>Calc</h1>
					<div className="theme-selector-container">
						<span>Theme</span>
						<div className="theme-selector">
							<span className="selector-one"></span>
							<span className="selector-two"></span>
							<span className="selector-three"></span>
						</div>
					</div>
				</div>
				<Screen value={screenValue} />
				<ButtonContainer>
					<Button value="Del" className="btn-op btn-delete" />
					<Button value="1" className="btn-num" />
					<Button value="2" className="btn-num" />
					<Button value="3" className="btn-num" />
					<Button value="4" className="btn-num" />
					<Button value="5" className="btn-num" />
					<Button value="6" className="btn-num" />
					<Button value="7" className="btn-num" />
					<Button value="8" className="btn-num" />
					<Button value="9" className="btn-num" />
					<Button value="0" className="btn-num btn-zero" />
					<Button value="." className="btn-num btn-point" />
					<Button value="+" className="btn-op btn-plus" />
					<Button value="-" className="btn-op btn-minus" />
					<Button value="/" className="btn-op btn-divide" />
					<Button value="*" className="btn-op btn-multiply" />
					<Button value="=" className="btn-op btn-equal" />
					<Button value="Reset" className="btn-op btn-reset" />
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
