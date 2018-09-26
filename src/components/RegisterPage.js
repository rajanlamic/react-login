import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import { userService } from '../services';

class RegisterPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				username: '',
				password: ''
			},
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event, field) {
		// handle input change and dispatch register
		this.setState({
			[field]: event.target.value
		});
	}

	handleSubmit(event) {
		// handle button click and dispatch register
		if (this.state.username && this.state.password) {
			this.props.dispatch(userActions.register({ username: this.state.username, password: this.state.password }));
		}
		event.preventDefault();
	}

	render() {
		const { user, submitted } = this.state;
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2 style={{ display: 'none' }}>Register</h2>
				<form name="form">
					<div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control username"
							name="username"
							onChange={(event) => this.handleChange(event, 'username')}
						/>
						{submitted && !user.username && <div className="help-block">Username is required</div>}
					</div>
					<div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control password"
							name="password"
							onChange={(event) => this.handleChange(event, 'password')}
						/>
						{submitted && !user.password && <div className="help-block">Password is required</div>}
					</div>
					<div className="form-group">
						<button className="btn btn-primary" style={{ fontSize: '10px' }} onClick={this.handleSubmit}>
							Register
						</button>
						<Link to="/login" className="btn btn-link">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

// complete the below function
function mapStateToProps(state) {
	return {
		a: 'a'
	};
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { RegisterPage as TestRegisterPage };
export { connectedRegisterPage as RegisterPage };
