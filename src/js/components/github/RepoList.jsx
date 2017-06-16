import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Repo from './Repo.jsx';

class RepoList extends Component {
	render() {
		console.log('Recieved List:');
		console.log(this.props.userRepos);
			
		const listRepos = this.props.userRepos.map(repo => 
			<Repo 
				repo={repo} 
				key={repo.id} />
		);

		return (
			<div>
				<ul className="list-group">
					{listRepos}
				</ul>
			</div>
		);
	}
}

export default RepoList