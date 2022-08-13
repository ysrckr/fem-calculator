import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import Button from './components/Button'
import Input from './components/Input'
import { useState } from 'react'

function App() {
	const [inputValue, setInputValue] = useState('')
	return (
		<>
			<Container>
				<Input value={inputValue} />
				<ButtonContainer>
					<Button value="1" className="btn-num" />
					<Button value="2" className="btn-num" />
					<Button value="3" className="btn-num" />
					<Button value="+" className="btn-op" />
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
