import React from 'react';
import './App.css';

import Titles from "./components/Titles";
import UserInputsForm from "./components/UserInputs";
import ApiData from "./components/ApiData";

const API_KEY = "0984ac95c6df950a49c9fa3087290569";
class App extends React.Component {

  // Default state
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    wind: undefined
  }

  //Method for getting weather data
  getWeatherData = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const get_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await get_data.json();
    console.log(data);

  // If country and city is placed on the form, display weather data
    if (country && city) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        wind: data.wind.speed
      });
    }
    // If form is missing country or city, don't show weather data
    else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        wind: undefined
      });
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">

        <p>Current temperature</p>
        <Titles />
        <UserInputsForm getWeatherData = {this.getWeatherData}/>
        <ApiData
          city = { this.state.city }
          country = { this.state.country }
          temperature = { this.state.temperature }
          description = { this.state.description}
          wind = { this.state.wind }
          />
        </div>
      </div>
    );
  }
}

export default App;
