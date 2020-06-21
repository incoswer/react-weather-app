import React from "react";
import {getWeather} from "../../api/api";
import ShowWeather from "./ShowWeather/ShowWeather";

class InputCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            cod: null,
            timezone: null,
            weather: null,
            wind: null,
            main: null,
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()
        getWeather(e.target.elements.city.value,e.target.elements.select.value).then(responce => {
            this.setState(responce.data)
        }).catch(error=>{
            alert('Ошибка')
        })
        e.target.elements.city.value = ''
    }

    render() {
        return <>
            {this.state.cod === 200 ?
                <ShowWeather city={this.state.name} weather={this.state.weather} main={this.state.main} wind={this.state.wind}/> :
                <p>Введите город</p>}
            <form onSubmit={this.submitForm}>
                <input autoFocus={true} required={true} type={'text'} name={'city'} placeholder={'Введите название города'} />
                <select name={'select'}>
                    <option value={'metric'}>Градусы</option>
                    <option value={'default'}>Кельвины</option>
                </select>
                <button type={'submit'}>Посмотреть погоду</button>
            </form>
        </>
    }
}

export default InputCity