import Container from './components/Container'
import ButtonContainer from './components/ButtonContainer'
import ButtonNum from './components/ButtonNum'
import ButtonOp from './components/ButtonOp'
import Screen from './components/Screen'
import { FC, useState, useReducer, Reducer } from 'react'
import { Action, IState } from './types/reducerTypes'

const initialState: IState = {
	screenValue: '0',
	result: 0,
	operator: '',
	numbers: { first: 0, second: 0 },
}

const reducer: Reducer<IState, Action> = (state, action) => {
	switch (action.type) {
		case 'SET_SCREEN_VALUE':
			if (state.screenValue === '0') {
				return { ...state, screenValue: action.payload }
			}
			return { ...state, screenValue: state.screenValue + action.payload }
		case 'ADD':
			const screenValueInt = parseFloat(
				state.screenValue.replace(/,/g, ''),
			)
			if (state.numbers.first === 0) {
				return {
					...state,
					operator: '+',
					numbers: { first: screenValueInt, second: 0 },
					screenValue: '0',
				}
			} else {
				return {
					...state,
					operator: '+',
					screenValue: '0',
				}
			}

		case 'EQUAL':
			switch (state.operator) {
				case '+':
					if (state.numbers.first && state.numbers.second) {
						const total = state.numbers.first + state.numbers.second
						return {
							...state,

							screenValue: total.toString(),
							numbers: {
								first: total,
								second: 0,
							},
						}
					}

					return {
						...state,
						screenValue: (
							state.numbers.first +
							parseFloat(state.screenValue.replace(/,/g, ''))
						).toString(),
						numbers: {
							first:
								state.numbers.first +
								parseFloat(state.screenValue.replace(/,/g, '')),
							second: 0,
						},
					}
			}

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
