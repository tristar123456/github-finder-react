import {createContext, PropsWithChildren, useReducer} from 'react';
import {alertReducer} from './AlertReducer';

export interface AlertState {
	alert?: {
		msg: string,
		type: string
	},
	setAlert: (msg: string, type: string) => void
};

const initialState: AlertState = {
	setAlert: () => {}
};

export const AlertContext = createContext<AlertState>(initialState)

export const AlertProvider = ({children}: PropsWithChildren) => {
	const [state, dispatch] = useReducer(alertReducer, initialState);

	// Set an alert
	const setAlert = (msg: string, type: string) => {
		dispatch({
			type: 'SET_ALERT',
			payload: {msg, type}
		});

		setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000);
	}

	return (<AlertContext.Provider value={{
		alert: state.alert,
		setAlert
	}}>{children}</AlertContext.Provider>)
}