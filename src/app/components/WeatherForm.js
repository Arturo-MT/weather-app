import React from "react";

const WeatherForm = props => {
    const onChangeValue = (event) =>{
        const unitOnChangeVale =event.target.value;
        const unitSelector = document.getElementById("unitSelector")
        unitSelector.setAttribute("value", unitOnChangeVale)
    }

    return(
    <div className= "card card-body">
        <form onSubmit= { props.getWeather } autoComplete="new-password">
            <div className= "form-group">
                <input type= "text" name= "city" placeholder= "Your City Name"
                className= "form-control" autoFocus autoComplete="off"/>
            </div>
            <div className= "form-group">
                <input type= "text" name= "country" placeholder= "Your Country Name" 
                className= "form-control mt-1" autoComplete="off"/>
            </div>
            <div className="btn-group mt-1" id="unitSelector" role="group" aria-label="Basic radio toggle button group" onChange={onChangeValue} >
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value={"metric"}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1"><b>C°</b></label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value={"imperial"}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2"><b>F°</b></label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value={"standard"}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3"><b>K°</b></label>
            </div>
            <button className= "btn btn-success btn-lg w-100 mt-2">
                Get Weather
            </button>
        </form>
    </div>
)}

export default WeatherForm