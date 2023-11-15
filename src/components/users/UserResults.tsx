import {useContext} from 'react';
import {GithubUser} from '../../models/GithubUser';
import {Spinner} from '../layout/Spinner';
import {UserItem} from './UserItem';
import {GithubContext} from '../../context/github/GithubContext';

export function UserResults() {
	const {users, loading} = useContext(GithubContext);

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user: GithubUser, index) => (
					<UserItem key={index} user={user}/>
				))}
			</div>
		);
	} else {
		return (
			<Spinner/>
		)
	}
}