/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = (props) => {
  const {
    forecast: { date, humidity, temperature, wind },
  } = props;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        <h1>
          <b>{moment(date).format("ddd Do MMM")}</b>
        </h1>
      </div>
      <div className="forecast-details__temperature-max">
        <b>Max Temperature: </b>
        {temperature.max}
        &deg;c
      </div>
      <div className="forecast-details__temperature-min">
        <b>Min Temperature: </b>
        {temperature.min}
        &deg;c
      </div>
      <div className="forecast-details__humidity">
        <b>humidity: </b>
        {humidity}
        &#37;
      </div>
      <div className="forecast-details__wind">
        <b>Wind: </b>
        {wind.speed}
        {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
