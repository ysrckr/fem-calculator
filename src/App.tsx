import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import ButtonNum from './components/ButtonNum'
import ButtonOp from './components/ButtonOp'
import Screen from './components/Screen'
import { FC, useState, useReducer, Reducer } from 'react'

export interface INumbers {
	first: number
	second: number
}

export interface IState {
	screenValue: string
	result: number
	operator: string
	numbers: INumbers
}

export interface IAction {
	type:
		| 'ADD'
		| 'EQUAL'
		| 'CLEAR'
		| 'SET_SCREEN_VALUE'
		| 'SET_RESULT'
		| 'SET_OPERATOR'
		| 'SET_NUMBER_FIRST'
		| 'SET_NUMBER_SECOND'
		| 'SET_NUMBERS'
	payload?: string | number | INumbers
}

const initialState: IState = {
	screenValue: '0',
	result: 0,
	operator: '',
	numbers: { first: 0, second: 0 },
}

const reducer: Reducer<IState, IAction> = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return { ...state }
		default:
			return state
	}
}

const App: FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
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
				<Screen value={state.screenValue} theme={theme} />
				<ButtonContainer theme={theme}>
					<ButtonNum
						value="7"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonNum
						value="8"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonNum
						value="9"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonOp
						value="DEL"
						className="btn-delete"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
						
					/>
					<ButtonNum
						value="4"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonNum
						value="5"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonNum
						value="6"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonOp
						value="+"
						className="btn-num btn-plus"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonNum
						value="1"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonNum
						value="2"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonNum
						value="3"
						className="btn-num"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonOp
						value="-"
						className="btn-num btn-minus"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonNum
						value="."
						className="btn-num btn-point"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonNum
						value="0"
						className="btn-num btn-zero"
						theme={theme}
						state={state}
						dispatch={dispatch}
					/>
					<ButtonOp
						value="/"
						className="btn-num btn-divide"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonOp
						value="x"
						className="btn-num btn-multiply"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
					<ButtonOp
						value="Reset"
						className="btn-reset"
						theme={theme}
						state={state}
						dispatch={dispatch}
					
					/>
					<ButtonOp
						value="="
						className="btn-equal"
						theme={theme}
						state={state}
						dispatch={dispatch}
						
					/>
				</ButtonContainer>
			</Container>
		</>
	)
}

export default App
