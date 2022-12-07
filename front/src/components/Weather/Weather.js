import React from "react";
import axios from "axios";
import "./Weather.scss";
import CitySearch from "./CitySearch";
import WeatherCard from "./WeatherCard";

class Weather extends React.Component {
  state = { weatherResult: null };

  onSearchSubmit = async (searchInputValue) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`
    );
    this.setState({ weatherResult: response.data });
  };

  render() {
    return (
      <div className="weathe">
        <h1 className="text-center title">Weather in</h1>
        <CitySearch onSearchSubmit={this.onSearchSubmit} />
        {this.state.weatherResult ? (
          <WeatherCard weatherResult={this.state.weatherResult} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Weather;
