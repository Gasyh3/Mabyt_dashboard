import React from "react";
import { useState } from "react";
import "./Service.scss";
import WidgetModaleDeezer from "../../WidgetModales/WidgetModaleDeezer/WidgetModaleDeezer";

function Services(props) {
  const [isInEditMode, setEditMode] = useState(false);

  const toogleEditMode = () => {
    setEditMode(!isInEditMode);
  };

  const toogleEditModeOnPressEnter = (e) => {
    if (e.code === "Enter") toogleEditMode(!isInEditMode);
  };

  if (isInEditMode) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <button
        disabled={props.disabled}
        className="service"
        onClick={toogleEditMode}
        onKeyPress={toogleEditModeOnPressEnter}
      >
        <img className="service__img" src={props.logo} alt="logo" />
      </button>

      {isInEditMode ? (
        <div>
          <div className="modale_background_overlay">
            <WidgetModaleDeezer
              toogleEditMode={toogleEditMode}
              actionText="Ajouter un Widget"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Services;
