import React from "react";
import "./Weather.scss";

class WeatherCard extends React.Component {
  spitOutCelcius = (kelvin) => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius;
  };

  getWeatherIcon = (iconParameter) => {
    const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`;
    return <img src={icon} alt="" />;
  };

  render() {
    return (
      <div className="card rounded my-3 shadow-lg back-card">
        <div className="card-top text-center my-3"></div>

        <div className="card-body">
          <div className="icon-container card shadow mx-auto">
            {this.getWeatherIcon(this.props.weatherResult.weather[0].icon)}
          </div>
          <div className="card-bottom px-5 py-4 row">
            <div className="col text-center">
              <p>
                {this.spitOutCelcius(this.props.weatherResult.main.feels_like)}
                &deg;C
              </p>
              <span>Feels Like</span>
            </div>
            <div className="col text-center">
              <p>{this.props.weatherResult.main.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
