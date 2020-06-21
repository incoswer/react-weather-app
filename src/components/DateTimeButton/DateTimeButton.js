import React from "react";

class DateTimeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeButton: false,
        }
        this.changeButtonClick = this.changeButtonClick.bind(this)
    }

    changeButtonClick() {
        this.setState({
            changeButton: !this.state.changeButton
        })
    }

    render() {
        let time = this.props.datetime.toLocaleTimeString()
        let date = this.props.datetime.toLocaleDateString()
        return <button onClick={this.changeButtonClick}>
            {this.state.changeButton ? time : date}
        </button>
    }
}

export default DateTimeButton