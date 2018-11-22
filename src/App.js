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
    icon: undefined,
    temperature: undefined,
    description: undefined,
    wind: undefined,
    errorMessage: undefined
  }

  //Method for getting weather data
  getWeatherData = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const get_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await get_data.json();
    console.log(data);


  // If country or city is missing, give error message
    if (!country || !city) {
      this.setState({
        city: undefined,
        country: undefined,
        icon: undefined,
        temperature: undefined,
        description: undefined,
        wind: undefined,
        errorMessage: "Please fill in both inputs."
      });
    }

    // If can't find weather data, give error message
    else if (data.cod === "404") {
      this.setState({
        city: undefined,
        country: undefined,
        icon: undefined,
        temperature: undefined,
        description: undefined,
        wind: undefined,
        errorMessage: "Couldn't find any weather data. Check your spelling."
      });
    }
    // If no errors, display weather data
    else {
        this.setState({
          city: data.name,
          country: data.sys.country,
          icon: "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
          temperature: data.main.temp,
          description: data.weather[0].description,
          wind: data.wind.speed,
          errorMessage: ""
        });
      }
  }
  render() {
    return (
      <div className="wrapper">
          <div className="container">
            <div className="title-area">
              <Titles />
            </div>
            <div className="form-area">
              <UserInputsForm getWeatherData = {this.getWeatherData}/>
              <ApiData
                icon = { this.state.icon }
                city = { this.state.city }
                country = { this.state.country }
                temperature = { this.state.temperature }
                description = { this.state.description}
                wind = { this.state.wind }
                errorMessage = {this.state.errorMessage}
                />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
