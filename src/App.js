import React, { Component } from 'react';
import './App.css';

import Titles from "./components/Titles";
import UserInputsForm from "./components/UserInputs";

const API_KEY = "b6907d289e10d714a6e88b30761fae22"
class App extends Component {

  //Method for getting weather data
  getWeatherData = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const get_data = await fetch(`http://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await get_data.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
    });
  }
  render() {
    return (
      <div>
        <p>Current temperature</p>
        <Titles />
        <UserInputsForm getWeatherData = {this.getWeatherData}/>
      </div>
    );
  }
}

export default App;
