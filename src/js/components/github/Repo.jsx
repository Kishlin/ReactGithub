import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Repo extends Component {
	render() {
		const repo = this.props.repo;
		console.log('Recieved repo:');
		console.log(repo);

		return (
			<li className="list-group-item">
				<a href={repo.html_url}>
					{repo.name}
				</a> : {repo.description}
			</li>
		);
	}
}

export default Repo