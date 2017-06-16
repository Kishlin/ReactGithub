import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'kishlin',
			userData: [],
			userRepos: [],
			perPage: 10,
			company: 'yo'
		}
	}

	// Get user details from Github api
	getUserData() {
		var request = new Request(
			'https://api.github.com/users/' + this.state.username 
			+ "?client_id=" + this.props.clientId
			+ "&client_secret=" + this.props.clientSecret
		);

		fetch(request)
		.then(function(response) {
			if(response.ok) {
				response
				.json()
				.then(function(data) {
					this.setState({
						userData: data
					});
				}.bind(this));
			} else {
				alert('User not found.');
			}
		}.bind(this));
	}

	// Get user repos from Github api
	getUserRepos() {
		var request = new Request(
			'https://api.github.com/users/' + this.state.username 
			+ "/repos?per_page=" + this.state.perPage 
			+ "&client_id=" + this.props.clientId
			+ "&client_secret=" + this.props.clientSecret
			+ "&sort=created"
		);

		fetch(request)
		.then(function(response) {
			if(response.ok) {
				response
				.json()
				.then(function(data) {
					this.setState({
						userRepos: data
					});
				}.bind(this));
			}
		}.bind(this));
	}

	handleFormSubmit(username) {
		this.setState({
			username: username
		}, function() {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render() {
		return (
			<div>
				<Search onFormSubmit={this.handleFormSubmit.bind(this)} />
				<hr />
				<Profile {...this.state} />
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