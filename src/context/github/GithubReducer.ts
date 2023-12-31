import {GithubContextState} from './GithubContext';

const githubReducer = (state: GithubContextState, action: { type: string, payload?: any }) => {
	switch (action.type) {
		case 'GET_USER':
			return {
				...state,
				user: action.payload.user,
				repos: action.payload.repos,
				loading: false
			};
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case 'CLEAR_USERS':
			return {
				...state,
				users: []
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}

export default githubReducer;