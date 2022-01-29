import React from "react";

const WeatherInfo = props => {
    return (
        <>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>
                        { props.error }
                    </p>
                </div>
            }
            {
                props.temperature && !props.error?
                <div className="card card-body">
                    <p>
                        Location: { props.city }, { props.country }
                    </p>
                    <p>
                        Description: { props.description }
                    </p>
                    <p>
                        Temperature: { props.temperature }°C & Feels like: { props.feelsLike }°C
                    </p>
                    <p>
                        Wind Speed: { props.windSpeed } Km/h
                    </p>
                    <p>
                        Humidity: { props.humidity }%
                    </p>
                </div>
                :
                <div></div>
            }
        </>
    );
}

export default WeatherInfo;