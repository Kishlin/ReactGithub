import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'kishlin',
			userData: [],
			userRepos: [],
			perPage: 5,
			company: 'yo'
		}
	}

	getUserData() {
		var request = new Request(
			'https://api.github.com/users/' + this.state.username 
			+ "?client_id=" + this.props.clientId
			+ "&client_secret=" + this.props.clientSecret
		);

		fetch(request)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			this.setState({
				userData: data
			});
		}.bind(this));
	}

	componentDidMount() {
		this.getUserData();
	}

	render() {
		return (
			<div>
				<Profile userData={this.state.userData} />
			</div>
		);
	}
}

App.propTypes = {
	clientId: 	  React.PropTypes.string,
	clientSecret: React.PropTypes.string,
}

App.defaultProps = {
	clientId: 	  'Iv1.329590bc2204cdbb',
	clientSecret: '19317dfac8a9f9503013e1209701a8831eb76181'
}

export default App