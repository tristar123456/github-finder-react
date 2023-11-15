import React, {createContext, useReducer} from 'react';
import {GithubUser} from '../../models/GithubUser';
import githubReducer from './GithubReducer';

export type GithubContextState = {
	user?: GithubUser,
	users: GithubUser[],
	repos?: any[],
	loading?: boolean,
};

const initialState: GithubContextState & {dispatch: Function} = {
	users: [],
	repos: [],
	loading: false,
	dispatch: ()=>{}
};
export const GithubContext = createContext<GithubContextState & {dispatch: Function}>(initialState);

// @ts-ignore
export const GithubProvider = ({children}) => {
	const [state, dispatch] = useReducer(githubReducer, initialState);

	return <GithubContext.Provider value={{
		...state,
		dispatch
	}}>
		{children}
	</GithubContext.Provider>
}
