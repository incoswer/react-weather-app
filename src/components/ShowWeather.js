import React from "react";
import {ReactSVG} from "react-svg";
import {getFlagCountry} from "../common/getFlagCountry";


const ShowWeather = (props) => {
    return (
        <div>
            <span>{props.city}</span>
            <li>Температура в городе: {Math.ceil(props.main.temp)}&deg;</li>
            <li>Ощущается как: {Math.ceil(props.main.feels_like)}&deg;</li>
            <div className={'svg'}>
                <ReactSVG src={getFlagCountry(props.country)}/>
            </div>
        </div>)
}

export default ShowWeather