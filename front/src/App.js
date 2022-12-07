import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import { getCurrentUser } from "./util/APIUtils";
import { ACCESS_TOKEN } from "./constants";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Header from "./components/Header/Header";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

import "./style/normalize.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="App">
        <Header authenticated={this.state.authenticated} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="signin"
            render={(props) => (
              <Signin authenticated={this.state.authenticated} {...props} />
            )}
          ></Route>
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
