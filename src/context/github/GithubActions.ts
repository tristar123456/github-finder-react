import {GithubUser} from '../../models/GithubUser';

const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY;

// Get search results
export const searchUsers = async (text: string) => {
	const params = new URLSearchParams({
		q: text
	});
	const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`
		}
	})

	const {items} = await res.json();
	return items
}

// Get User and Repos
export const getUserAndRepos = async (login: string) => {
	const params = new URLSearchParams({
		sort: 'created',
		per_page: '10'
	})

	const [user, repos] = await Promise.all([
		fetch(`${GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`
			}
		}),
		fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`
			}
		})
	]).then((fetches) => Promise.all(fetches.map(fetched => fetched.json())));

	// @ts-ignore
	return {user, repos}
}
