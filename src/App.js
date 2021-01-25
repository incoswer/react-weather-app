import React from 'react';
import CityForm from "./components/CityForm";
import {connect} from "react-redux";
import {getWeather} from "./redux/app-reducer";
import PopularCities from "./components/PopularCities";
import {Container} from "@material-ui/core";
import './app.css'
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
            <Container fixed>
                <div>
                    {this.props.error ? <div>
                        <p>error dfjdf</p>
                        <p>{this.props.errorMessage}</p>
                    </div> : null}

                    <div className={this.props.isReady ? 'city ready' : 'city'}>
                        <CityForm/>
                    </div>
                    {document.cookie ? <div>{this.props.recentCity}</div> : null}
                    <div>
                        <PopularCities/>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})


export default connect(mapStateToProps, {getWeather})(App)
