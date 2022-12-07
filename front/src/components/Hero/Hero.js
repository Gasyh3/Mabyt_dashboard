import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {" "}
          Welcome to <span className="hero__title--color">Mabyt</span>{" "}
        </h1>
        <h2 className="hero__desc">You're new Dashboard</h2>
        <Link className="hero__dash" to="dashboard">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}

export default Hero;
