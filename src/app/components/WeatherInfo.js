import React from "react";

const WeatherInfo = props => {
    console.log(props.icon)
    const src="http://openweathermap.org/img/wn/" + props.icon + "@2x.png"
    return (
        <>
            {
                props.error &&
                <div className="alert alert-danger mt-1">
                    <p>
                        { props.error }
                    </p>
                </div>
            }
            {
                props.temperature && !props.error?
                <div className="card card-body mt-1 pt-1">
                    <img className="mx-auto" src= {src}/>
                    <p>
                        <b>Location</b>: <i>{ props.city }, { props.country }</i>
                    </p>
                    <p>
                        <b>Description: </b><i>{ props.description }</i>
                    </p>                     
                    <p>
                        <b>Temperature: </b><i>{ props.temperature } {props.temperatureUnits}</i><b> & Feels like: </b>
                        <i>{ props.feelsLike } {props.temperatureUnits}</i>
                    </p>
                    <p>
                        <b>Wind Speed: </b><i>{ props.windSpeed } {props.speedUnits}</i>
                    </p>
                    <p>
                        <b>Humidity: </b><i>{ props.humidity }%</i>
                    </p>
                </div>
                :
                <div></div>
            }
        </>
    );
}

export default WeatherInfo;