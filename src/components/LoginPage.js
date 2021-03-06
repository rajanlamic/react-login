import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		// reset login status

		this.state = {
			username: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e, target) {
		const targetValue = e.currentTarget.value;
		// alert(targetValue);
		this.setState({
			[target]: targetValue
		});
	}

	handleSubmit(event) {
		if (this.state.username && this.state.password) {
			this.props.dispatch(userActions.login(this.state.username, this.state.password));
		}
		event.preventDefault();
	}

	render() {
		const { username, password, submitted } = this.state;
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2 style={{ display: 'none' }}>Login</h2>
				<form name="form">
					<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control username"
							name="username"
							onChange={(e) => this.handleChange(e, 'username')}
						/>
						{submitted && !username && <div className="help-block">Username is required</div>}
					</div>
					<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control password"
							name="password"
							onChange={(e) => this.handleChange(e, 'password')}
						/>
						{submitted && !password && <div className="help-block">Password is required</div>}
					</div>
					<div className="form-group">
						<button className="btn btn-primary" onClick={this.handleSubmit}>
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLoggedIn: state.authentication && state.authentication.loggedIn
	};
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { LoginPage as TestLoginPage };
export { connectedLoginPage as LoginPage };
