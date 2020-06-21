import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputCity from "./components/InputCity/InputCity";
import DateTimeButton from "./components/DateTimeButton/DateTimeButton";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            datetime: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({
                datetime: new Date()
            }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let datetime = this.state.datetime.getHours()
        return (
            <div className={(datetime > 7 && datetime < 21) ? 'daylight' : 'night'}>
                <InputCity/>
                <DateTimeButton datetime={this.state.datetime}/>
            </div>
        );
    }
}

export default App;
