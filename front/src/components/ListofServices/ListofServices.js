import React from "react";
import "./ListofServices.scss";
import LogoYoutube from "../../assets/service_youtube.webp";
import LogoWeather from "../../assets/service_weather.png";
import LogoDeezer from "../../assets/service_deezer.png";
function ListofServices() {
  return (
    <div className="ListofServices">
      <h2 className="ListofServices__title"> List of Services </h2>
      <div className="ListofServices__container">
        <img
          src={LogoYoutube}
          alt="Logo youtube"
          className="ListofServices__logo"
        />
        <img
          src={LogoWeather}
          alt="Logo weather"
          className="ListofServices__logo"
        />

        <img
          src={LogoDeezer}
          alt="Logo deezer"
          className="ListofServices__logo"
        />
      </div>
    </div>
  );
}

export default ListofServices;
