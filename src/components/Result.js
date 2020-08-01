import React from 'react';
import './Result.css';

const Result = props => {

const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather;

let content = null;

if(!err && city) {


    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
        <div>
            <h3>All information about <em>{city}</em></h3>
            <h4>Date and Time: {date}</h4>
            <h4>Current temperature: {temp} &#176;C</h4>
            <h4>The sunrise for today: {sunriseTime}</h4>
            <h4>The sunset for today: {sunsetTime}</h4>
            <h4>The current wind strength today: {wind} m/s</h4>
            <h4>The current pressure today: {pressure} hPa</h4>
        </div>
    )
}

return ( 
<div className="result">
    {err ? `Does not exist in the database ${city}` : content}
</div>
 );
}

export default Result;