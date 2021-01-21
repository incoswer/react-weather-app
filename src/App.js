import React from 'react';
import './app.sass';
import InputCityForm from "./components/InputCity/InputCityForm";
import {connect} from "react-redux";
import {getWeather} from "./redux/app-reducer";
import PopularCities from "./components/PopularCities/PopularCities";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.cookie = 'recentCity=cheboxary'
    }

    componentWillUnmount() {
    }

    render() {
        return (

            <div className={'app'}>
                {this.props.error ? <div>
                    <p>error dfjdf</p>
                    <p>{this.props.errorMessage}</p>
                </div>: null}

                <div className={this.props.isReady ? 'city ready' : 'city'}>
                    <InputCityForm />
                </div>
                {document.cookie ? <div>{this.props.recentCity}</div> : null}
                <div>
                    <PopularCities />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})


export default connect(mapStateToProps, {getWeather})(App)
