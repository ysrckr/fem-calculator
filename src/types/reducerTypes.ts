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

export interface INumbers {
	first: number
	second: number
}
