import React from "react";
import ServiceYoutube from "../../components/Services/ServiceYoutube/ServiceYoutube";
import ServiceDeezer from "../../components/Services/ServiceDeezer/ServiceDeezer";
import ServiceMeteo from "../../components/Services/ServiceMeteo/ServiceMeteo";
import ServiceClock from "../../components/Services/ServiceClock/ServiceClock";
import "./Dashboard.scss";
import LogoYoutube from "../../assets/service_youtube_1.png";
import LogoWeather from "../../assets/service_weather.png";
import LogoDeezer from "../../assets/service_deezer.png";
import LogoClock from "../../assets/service_clock.png";
import { Clock } from "../../components/Clock/Clock";
import { Draggable } from "drag-react";
import YouTube from "@u-wave/react-youtube";
import Weather from "../../components/Weather/Weather";
import PlayWidget from "react-spotify-widgets";
import Calculator from "../../components/Calculator/Calculator";

function Dashboard() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="dashboard" id="dashboard">
          <div className="dashboard__bloc">
            <div className="dashboard__services">
              <h3 className="dashboard__services--title">Services</h3>
              <ServiceYoutube logo={LogoYoutube} />
              <ServiceMeteo logo={LogoWeather} />
              <ServiceDeezer logo={LogoDeezer} />
              <ServiceClock logo={LogoClock} />
            </div>
            <div className="dashboard__widgets">
              <h3 className="dashboard__widgets--title">Widgets</h3>
              <Draggable>
                <Clock />
              </Draggable>
              <Draggable>
                <div className="youtube__widget">
                  <h3>Youtube Widget</h3>
                  <YouTube video="DxucO1TAmhg" autoplay />
                </div>
              </Draggable>
              <Draggable>
                <Weather />
              </Draggable>
              <Draggable>
                <div className="spotify__widget">
                  <h3>Spotify Widget</h3>
                  <PlayWidget
                    width={300}
                    height={80}
                    uri={"spotify:album:1xhO0GSoezdPJcSuNe1ySv"}
                  />
                </div>
              </Draggable>
              <Draggable>
                <Calculator />
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
