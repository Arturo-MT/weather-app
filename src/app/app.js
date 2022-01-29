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
        error : null
    }

    getWeather = async e =>{
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
//aquí podemos separar la url para manipular más comodamente las variables ;)
        const OpenWeatherAPI_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${OPENWEATHER_API_KEY}&units=metric`

        if(countryValue && cityValue){
        const response = await fetch(OpenWeatherAPI_URL);
        const data = await response.json();
        const descriptionUpperCase = data.weather[0].description.replace(/\b\w/g, function(l){ return l.toUpperCase() })

        this.setState({
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            description : descriptionUpperCase,
            humidity : data.main.humidity,
            windSpeed : data.wind.speed,
            city : data.name,
            country : data.sys.country,
            error : null
        });
        } else {
            this.setState({error: "Please Enter a City and a Country"})
        }
    }

    render(){
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather = {this.getWeather}/>
                        <WeatherInfo { ...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;