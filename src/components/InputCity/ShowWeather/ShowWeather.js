import React from "react";

const ShowWeather = (props) => {
    return <p>
        <span>{props.city}</span>
        <li>Температура в городе: {Math.ceil(props.main.temp)}&deg;</li>
        <li>Ощущается как: {Math.ceil(props.main.feels_like)}&deg;</li>
    </p>
}

export default ShowWeather