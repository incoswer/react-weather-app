import React from "react";
import ShowWeather from "./ShowWeather/ShowWeather";
import {connect} from "react-redux";
import {getWeather} from "../../redux/app-reducer";

class InputCityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cod:0
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()
        this.props.getWeather(e.target.elements.city.value)

    }

    render() {
        return <>
            {this.props.cod === 200 ?
                <ShowWeather city={this.props.name} weather={this.props.weather} main={this.props.main} wind={this.props.wind}/> :
                <p>Введите город</p>}
            <form onSubmit={this.submitForm}>
                <input autoFocus={true} required={true} type={'text'} name={'city'} placeholder={'Введите название города'}
                        />
                <select name={'select'}>
                    <option value={'metric'}>Градусы</option>
                    <option value={'default'}>Кельвины</option>
                </select>
                <button type={'submit'}>Посмотреть погоду</button>
            </form>
        </>
    }
}
const mapStateToProps=(state)=>({
    ...state
})

export default connect(mapStateToProps,{getWeather})(InputCityForm)