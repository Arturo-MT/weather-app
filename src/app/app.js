import React, { Component } from "react";

import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import { OPENWEATHER_API_KEY } from "./keys.js";

class App extends Component{
    state ={
        temperature : "",
        feelsLike: "",
        description : "",
        humidity : "",
        windSpeed : "",
        city : "",
        country : "",
        temperatureUnits:"",
        speedUnits:"",
        icon: "",
        error : null
    }
    getWeather = async e =>{
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        const units = e.target.elements.btnradio.value;
        const URLVars = `q=${cityValue},${countryValue}&appid=${OPENWEATHER_API_KEY}&units=${units}`
        const OpenWeatherAPI_URL = `http://api.openweathermap.org/data/2.5/weather?`+ URLVars;
        if(countryValue && cityValue){
            var response = await fetch(OpenWeatherAPI_URL);
            if (response.status == 404){
                this.setState ({ error: "Please type valid cities and countries."})
            }

        const data = await response.json();
        const descriptionUpperCase = data.weather[0].description.replace(/\b\w/g, function(l){ return l.toUpperCase() })
        
        if (units == "metric"){
            this.setState({
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                description : descriptionUpperCase,
                humidity : data.main.humidity,
                windSpeed : data.wind.speed,
                city : data.name,
                country : data.sys.country,
                temperatureUnits:"C°",
                speedUnits:"km/h",
                icon: data.weather[0].icon,
                error : null
            })
        } else if(units == "imperial"){
            this.setState({
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                description : descriptionUpperCase,
                humidity : data.main.humidity,
                windSpeed : data.wind.speed,
                city : data.name,
                country : data.sys.country,
                temperatureUnits:"F°",
                speedUnits:"mph",
                icon: data.weather[0].icon,
                error : null
            })
        } else if(units == "standard"){
            this.setState({
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                description : descriptionUpperCase,
                humidity : data.main.humidity,
                windSpeed : data.wind.speed,
                city : data.name,
                country : data.sys.country,
                temperatureUnits:"K°",
                speedUnits:"km/h",
                icon: data.weather[0].icon,
                error : null
            })
        } else {
            this.setState({error: "Please Select a Unit"})
        }
    } else {
         this.setState({error: "Please Enter a City and a Country"})
        }
    }

    render(){
        return(
            <div className="container p-1">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather = {this.getWeather}/>
                        <WeatherInfo { ...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;