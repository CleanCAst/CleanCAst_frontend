import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class DateSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: new Date(2022, 0, 1),
            minDate: new Date(2021, 0, 1),
            maxDate: new Date(2023, 11, 31),
        };
    }

    handleSliderChange = (value) => {
        this.setState({
            value: new Date(value),
        });
    };

    formatDate = (date) => {
        return date.toISOString().slice(0, 10); // format as YYYY-MM-DD
    };

    formatTooltip = (value) => {
        return this.formatDate(new Date(value));
    };

    render() {
        const { value, minDate, maxDate } = this.state;

        const minTimestamp = minDate.getTime();
        const maxTimestamp = maxDate.getTime();
        const valueTimestamp = value.getTime();

        const position = (valueTimestamp - minTimestamp) / (maxTimestamp - minTimestamp) * 100;

        return (
            <div>
                <p>{this.formatDate(value)}</p>
                <Slider
                    min={minTimestamp}
                    max={maxTimestamp}
                    value={valueTimestamp}
                    onChange={this.handleSliderChange}
                    tipFormatter={this.formatTooltip}
                >
                    <Slider.Handle value={valueTimestamp} style={{ borderColor: '#4caf50' }} />
                </Slider>
            </div>
        );
    }
}

export default DateSlider;
