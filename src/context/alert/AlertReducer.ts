import {AlertState} from './AlertContext';

export const alertReducer = (state: AlertState, action: { type: string, payload?: any }): AlertState => {
	switch (action.type) {
		case 'SET_ALERT':
			return {
				...state,
				alert: action.payload
			}
		case 'REMOVE_ALERT':
			return {
				...state,
				alert: undefined
			}
		default:
			return state;
	}
}