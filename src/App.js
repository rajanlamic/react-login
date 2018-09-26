import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoute } from "./PrivateRoute.js";
import { history } from "./helpers";
import { alertActions, userActions } from "./actions";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";

export class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      if (location.pathname === "/logout") {
        this.logout();
      }
    });
  }

  logout = () => {
    userActions.logout();
    history.push("/");
  };

  render() {
    const { alert } = this.props;
    return (
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <Router history={history}>
            <div>
              <PrivateRoute
                exact
                path="/"
                component={HomePage}
                {...this.props}
              />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}
