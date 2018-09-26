import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../actions';
import { connect } from 'react-redux';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout() {
		this.props.dispatch(userActions.logout());
	}
	render() {
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2 align="center">Welcome! You have successfully logged in.</h2>
				<p align="center">
					<Link to="/" onClick={this.logout}>
						Logout
					</Link>
					{/* // Add a redirection for logout */}
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLoggedIn: state.authentication && state.authentication.loggedIn
	};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
