import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "../WidgetModale.scss";
import WidgetYoutube from "../../../components/widgets/widgetYoutube/widgetYoutube";

function WidgetModale(props) {
  const toogleEditModeOnPressEnter = (e) => {
    if (e.code === "Enter") {
      props.toogleEditMode();
    }
  };

  const viewPosition = window.scrollY + 40;
  return (
    <div>
      <div className="widget-modale" style={{ top: viewPosition }}>
        <div className="widget-modale__header">
          <h2 className="widget-modale__title">Widget</h2>

          <FontAwesomeIcon
            tabIndex={0}
            className="closeButton"
            icon={faCircleXmark}
            onClick={props.toogleEditMode}
            onKeyPress={toogleEditModeOnPressEnter}
          />
        </div>
        <div className="widget-modale__body">
          <WidgetYoutube />
        </div>
      </div>
    </div>
  );
}

export default WidgetModale;
