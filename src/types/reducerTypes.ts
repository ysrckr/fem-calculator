export interface IState {
	screenValue: string
	result: number
	operator: string
	numbers: INumbers
}

export type Action =
	| { type: 'SET_SCREEN_VALUE'; payload: string }
	| { type: 'EQUAL' }
	| { type: 'ADD' }
	| { type: 'SUBTRACT' }
	| { type: 'MULTIPILY' }
	| { type: 'DIVIDE' }
	| { type: 'DELETE' }
	| { type: 'RESET' }
	| { type: 'SET_NUMBERS'; payload: INumbers }

export interface INumbers {
	first: number
	second: number
}
