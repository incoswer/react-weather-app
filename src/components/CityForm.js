import React, {useState} from "react";
import ShowWeather from "./ShowWeather";
import {connect} from "react-redux";
import {getWeather} from "../redux/app-reducer";
import {FormControlLabel, TextField, Checkbox, Button} from "@material-ui/core";
import celsiusSvg from '../icons/celsius.svg'
import kelvinSvg from '../icons/kelvin.svg'
import {ReactSVG} from "react-svg";


function CityForm(props) {
    const [celsius, setMetric] = useState(true)

    const submitForm = function (e) {
        e.preventDefault()
        let metric = celsius ? 'metric' : 'default'
        props.getWeather(e.target.elements.city.value, metric)
    }

    return (
        <>
            {props.cod === 200 ?
                <ShowWeather city={props.name} weather={props.weather} main={props.main} wind={props.wind}
                             country={props.sys.country}/> :
                <p>Введите город</p>}
            <form onSubmit={submitForm}>
                <TextField
                    id="city"
                    label="Введите город"
                    variant="outlined"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={celsius}
                        icon={<ReactSVG src={kelvinSvg}/>}
                        checkedIcon={<ReactSVG src={celsiusSvg}/>}
                        onChange={(e) => setMetric(e.target.checked)}
                    />}
                />
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    type={'submit'}>Посмотреть погоду</Button>
            </form>
        </>)
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getWeather})(CityForm)