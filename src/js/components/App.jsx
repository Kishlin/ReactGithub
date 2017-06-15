import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'kishlin',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	render() {
		return (
			<div>{this.state.username}</div>
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