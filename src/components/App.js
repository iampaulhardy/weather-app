/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
// import SearchForm from "./SearchForm";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  //  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  //  const handleCitySearch = (searchText) => {
  //    getForecast(setSelectedDate, setForecasts, setLocation);
  //  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

/* App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      humidity: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired, */

export default App;
