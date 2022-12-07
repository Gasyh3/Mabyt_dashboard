import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <a href="http://localhost:3000" className="header__logo">
            Mabyt.com
          </a>
          {this.props.authenticated ? (
            <Link className="header__settings" to={"/profile"}>
              Profile
            </Link>
          ) : (
            <div className="header__link">
              <Link className="header__log" to="signup">
                Sign up
              </Link>
              <Link className="header__log" to="signin">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
