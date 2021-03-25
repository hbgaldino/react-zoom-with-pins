import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

import "./styles.css";

const containerStyle = {
  position: "absolute",
  zIndex: 1000,
  right: 0,
  display: "flex",
  flexDirection: "column",
  margin: 10,
};

const ZoomOutButton = ({ disabled, onClick }) => (
  <button className="iconButton" onClick={onClick} disabled={disabled}>
    <FontAwesomeIcon icon={faMinus} fixedWidth />
  </button>
);

const ZoomInButton = ({ disabled, onClick }) => (
  <button className="iconButton" onClick={onClick} style={{ marginBottom: "5px" }} disabled={disabled}>
    <FontAwesomeIcon icon={faPlus} fixedWidth />
  </button>
);

const ZoomButtons = ({ scale, minScale, maxScale, onZoomInClick, onZoomOutClick }) => (
  <div style={containerStyle}>
    <ZoomInButton onClick={onZoomInClick} disabled={scale >= maxScale} />
    <ZoomOutButton onClick={onZoomOutClick} disabled={scale <= minScale} />
  </div>
);

ZoomButtons.propTypes = {
  scale: PropTypes.number.isRequired,
  minScale: PropTypes.number.isRequired,
  maxScale: PropTypes.number.isRequired,
  onZoomInClick: PropTypes.func.isRequired,
  onZoomOutClick: PropTypes.func.isRequired,
};

export default ZoomButtons;
