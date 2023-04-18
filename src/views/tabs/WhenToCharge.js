// https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb
import React from 'react';

// data viz components
import Plot from 'react-plotly.js';
import * as d3 from 'd3';

// reactstrap components
import {
    Container,
    Col,
    Row
} from "reactstrap";

// import data 
import forecasts from "../../data/forecast.json"

// react date slider 
import Slider, { createSliderWithTooltip } from "rc-slider";
// import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

var moment = require('moment');

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
const Range = Slider.Range;
const Handle = Slider.Handle;


export default class WhenToCharge extends React.Component {
    state = {
        line: {
            x: [Object.keys(forecasts['2022-01-01'])][0].map(Number),
            y: [Object.values(forecasts['2022-01-01'])][0].map(Number),
            name: 'Predicted<br>Carbon<br>Intensity',
            line: {
                color: 'grey'
            },
            hoverinfo: 'text',
            hoverformat: '.2f',
            // hovertext: 'Carbon Intensity:<br>' + [Object.values(forecasts['2022-01-01'])][0].map(Number),
            hovertemplate: 'Predicted Carbon Intensity:<br>%{y:.2f}<extra></extra>',
            hovermode: 'x unified',
            date: '2022-01-01'
        },
        q1_greenbars: {
            x: [17, 18, 19, 20, 21, 22, 23, 40, 41, 42, 43, 44, 45, 46, 67, 69, 88, 89, 90, 91, 92, 93, 94, 95],
            y: Array(24).fill(1),
            type: "bar",
            marker: {
                color: 'rgba(0, 128, 0, 1)'
            },
            hoverinfo: 'skip',
            showlegend: false,
            opacity: 0.4
        },
        q4_redbars: {
            x: [7, 8, 9, 10, 11, 12, 13, 54, 55, 56, 57, 58, 59, 60, 61, 77, 78, 79, 80, 81, 82, 83, 84, 85],
            y: Array(24).fill(1),
            type: "bar",
            marker: {
                color: 'rgba(255, 0, 0, 1)'
            },
            hoverinfo: 'skip',
            showlegend: false,
            opacity: 0.4
        },
        layout: {
            datarevision: 0,
            xaxis: {
                tickmode: 'array',
                tickvals: [6, 17, 22, 26, 38, 41, 47, 65, 70, 76, 79, 81, 86, 90, 94],
                ticktext: ['10 pm', '9 am', '2 pm', '6 pm', '6 am', '9 am', '3 pm', '9 am', '2 pm', '8 pm', '11 pm', '1 am', '6 am', '10 am', '2 pm'],
                tickangle: 90
            },
            yaxis: {
                title: 'Carbon Intensity (lbs CO<sub>2</sub>/kWh)',
                showgrid: false,
                tickvals: [0.02, 0.97],
                ticktext: [0, 1],
            },
            margin: {
                l: 60,
                r: 40,
                b: 60,
                t: 20
            },
            showlegend: true,
            legend: {
                x: 1,
                y: 0.5
            },
            height: 500,
            width: 1100,
            shapes: [
                {
                    type: 'line',
                    x0: 0,
                    x1: 0,
                    y0: 0,
                    y1: 1,
                    line: {
                        color: 'black',
                        width: 3,
                        dash: 'dash'
                    }
                },
                {
                    type: 'line',
                    x0: 24,
                    x1: 24,
                    y0: 0,
                    y1: 1,
                    line: {
                        color: 'black',
                        width: 3,
                        dash: 'dash'
                    }
                },
                {
                    type: 'line',
                    x0: 48,
                    x1: 48,
                    y0: 0,
                    y1: 1,
                    line: {
                        color: 'black',
                        width: 3,
                        dash: 'dash'
                    }
                },
                {
                    type: 'line',
                    x0: 72,
                    x1: 72,
                    y0: 0,
                    y1: 1,
                    line: {
                        color: 'black',
                        width: 3,
                        dash: 'dash'
                    }
                }
            ],
            annotations: [
                {
                    x: 5,
                    y: 0.9,
                    text: 'January 1',
                    showarrow: false
                },
                {
                    x: 29,
                    y: 0.9,
                    text: 'January 2',
                    showarrow: false
                },
                {
                    x: 53,
                    y: 0.9,
                    text: 'January 3',
                    showarrow: false
                },
                {
                    x: 77,
                    y: 0.9,
                    text: 'January 4',
                    showarrow: false
                },
            ],
            bargap: 0,
            bargroupgap: 0
        },
        revision: 0,
        percentage: 30,
        value: new Date(2022, 0, 1),
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(2022, 11, 31),
    }

    // ---------- HANDLE DATE/TIME ----------
    // set today's date on page load 
    componentDidMount() {

        // handle date
        var dateToday = new Date();
        dateToday = '2022-' + (dateToday.getMonth() + 1) + '-' + dateToday.getDate();

        // update date picker
        const dateInput = document.getElementById("dateInput");
        dateInput.valueAsDate = new Date(dateToday);

        //update graph and slider
        this.updateGraph();
        this.updateSlider();

    };

    // define days and months arrays
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // add hours to the timestamp
    addHours(timestamp, edges) {
        const hour = new Date(timestamp).getHours(); // get the hour from the timestamp
        const newTimes = edges.map(num => {
            const date = new Date(timestamp);

            date.setHours(hour + num);
            const hours = date.getHours();
            const ampm = hours >= 12 ? 'pm' : 'am';
            const formattedHours = hours % 12 || 12;
            return `${formattedHours} ${ampm}`;
        });
        return newTimes;
    };

    // ---------- QUANTILES ---------- 
    // create quantile arrays 
    createQuantArray(x_arr, y_arr, quantile) {

        // set limits for quantiles 
        const Q0_lim = d3.quantile(y_arr, 0);
        const Q1_lim = d3.quantile(y_arr, 0.25);
        const Q2_lim = d3.quantile(y_arr, 0.5);
        const Q3_lim = d3.quantile(y_arr, 0.75);
        const Q4_lim = d3.quantile(y_arr, 1);

        // create Q1 array
        if (quantile == 'Q1') {
            var Q_num = []
            var Q_val = []
            x_arr.forEach((num_x, index) => {
                const num_y = y_arr[index];
                if (num_y >= Q0_lim && num_y <= Q1_lim) {
                    Q_num.push(num_x)
                    Q_val.push(num_y)
                }
            });
        };

        // create Q4 array 
        if (quantile == 'Q4') {
            var Q_num = []
            var Q_val = []
            x_arr.forEach((num_x, index) => {
                const num_y = y_arr[index];
                if (num_y >= Q3_lim && num_y <= Q4_lim) {
                    Q_num.push(num_x)
                    Q_val.push(num_y)
                }
            });
        };

        return [Q_num, Q_val];
    };

    getAverage(array) {
        const sum = array.reduce((a, b) => a + b);
        return sum / array.length;
    }

    // ---------- X AXIS NUMBERS ---------- 
    addAdjacentMissingNumbers(numbers) {
        const result = [];
        for (let i = 0; i < numbers.length; i++) {
            if (i === 0 || !numbers.includes(numbers[i] - 1)) {
                result.push(numbers[i]);
            }
            if (i === numbers.length - 1 || !numbers.includes(numbers[i] + 1)) {
                result.push(numbers[i]);
            }
        }
        return result;
    };

    // ---------- UPDATE GRAPH ---------- 
    updateGraph = () => {
        const { line, q1_greenbars, q4_redbars, layout } = this.state;


        // update date annotation
        line.date = document.getElementById("dateInput").value
        this.datetime = new Date(line.date + ' 00:00:00 UTC');
        layout.annotations[0].text = this.months[this.datetime.getUTCMonth()] + ' ' + this.datetime.getUTCDate();
        this.datetime_1 = new Date(this.datetime.setDate(this.datetime.getDate() + 1));
        layout.annotations[1].text = this.months[this.datetime_1.getUTCMonth()] + ' ' + (this.datetime_1.getUTCDate());
        this.datetime_2 = new Date(this.datetime_1.setDate(this.datetime_1.getDate() + 1));
        layout.annotations[2].text = this.months[this.datetime_2.getUTCMonth()] + ' ' + (this.datetime_2.getUTCDate());
        this.datetime_3 = new Date(this.datetime_2.setDate(this.datetime_2.getDate() + 1));
        layout.annotations[3].text = this.months[this.datetime_3.getUTCMonth()] + ' ' + (this.datetime_3.getUTCDate());

        // update lines and bars 
        line.y = [Object.values(forecasts[line.date])][0].map(Number);
        line.hovertext = [Object.values(forecasts[line.date])][0].map(Number);
        const [Q1_num, Q1_val] = this.createQuantArray(this.state.line.x, this.state.line.y, 'Q1');
        const [Q4_num, Q4_val] = this.createQuantArray(this.state.line.x, this.state.line.y, 'Q4');
        q1_greenbars.x = Q1_num;
        q4_redbars.x = Q4_num;

        // update xaxis
        const q1Edges = this.addAdjacentMissingNumbers(Q1_num)
        const q4Edges = this.addAdjacentMissingNumbers(Q4_num)
        var allEdges = [...new Set([...q1Edges, ...q4Edges])].sort((a, b) => a - b)

        // update slider value
        this.state.value = this.datetime;

        // update times 
        const newTimes = this.addHours(this.datetime, allEdges);
        layout.xaxis.tickvals = allEdges
        layout.xaxis.ticktext = newTimes

        //update percentage 
        const q1_avg = this.getAverage(Q1_val)
        const q4_avg = this.getAverage(Q4_val)
        this.state.percentage = parseFloat(100 * (q4_avg - q1_avg) / q4_avg).toFixed(2);

        //update state
        this.setState({ revision: this.state.revision + 1 });
        layout.datarevision = this.state.revision + 1;
    }

    // ---------- DATE SLIDER ----------
    updateSlider() {
        // parse today's date
        var dateToday = new Date();
        dateToday = new Date(2022, dateToday.getMonth(), dateToday.getDate());

        this.setState({
            value: dateToday
        });
    }

    handleSliderChange = (value) => {
        // update current value
        this.setState({
            value: new Date(value),
        });

        // update date picker and graph
        let valueFormatted = this.formatDateForInput(this.state.value);
        document.getElementById("dateInput").value = valueFormatted;
        this.updateGraph();
    };

    formatDateForInput = (date) => {
        return date.toISOString().slice(0, 10); // format as YYYY-MM-DD
    };

    formatDateLabel = (date) => {
        return this.months[date.getMonth()] + ' ' + date.getDate();// + '/' + date.getFullYear(); // format as MM-DD-YYYY
    };

    // ---------- HTML ---------- 
    render() {

        return (
            <div className="section" id="when-to-charge">
                <Container>
                    <hr className="line-primary" />
                    <h1>When to Charge</h1>
                    <h2>How to use this tool</h2>
                    <p>This widget helps you plan your energy usage. Plug in your cars and devices when energy is green,
                        and unplug when it's not! Watch out for times in the red because you'll contribute to carbon emissions.
                        The tool will automatically load on today's date, but you can choose any other date from the date picker at the
                        top of the tool.</p>
                    <br />
                    <fieldset>
                        <p>Select a Date:</p>
                        <input
                            type="date"
                            id="dateInput"
                            min="2022-01-01"
                            max="2022-12-31"
                        />
                        <button onClick={this.updateGraph}>Go!</button>
                    </fieldset>
                    <Plot
                        data={[
                            this.state.line,
                            this.state.q1_greenbars,
                            this.state.q4_redbars
                        ]}
                        layout={this.state.layout}
                        revision={this.state.revision}
                        graphDiv="graph"
                    />
                    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
                        <Row>
                            <Col style={{ textAlign: 'center' }}>
                                <p style={{fontSize: 20, fontWeight: 500}}>{this.formatDateLabel(this.state.value)}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Slider
                                    min={this.state.minDate.getTime()}
                                    max={this.state.maxDate.getTime()}
                                    value={this.state.value.getTime()}
                                    onChange={this.handleSliderChange}
                                    railStyle={{ backgroundColor: '#ddd' }}
                                    trackStyle={{ backgroundColor: '#4E8538' }}
                                    handleStyle={{ borderColor: '#4E8538' }}
                                >
                                    <Slider.Handle value={this.state.value.getTime()} style={{ borderColor: '#4caf50' }} />
                                </Slider>
                            </Col>
                            {/* <p>{this.state.value.getTime()}</p> */}
                        </Row>
                        <Row>
                            <Col>
                                <span>{this.formatDateLabel(this.state.minDate)}</span>
                            </Col>
                            <Col style={{ textAlign: 'right' }}>
                                <span>{this.formatDateLabel(this.state.maxDate)}</span>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <i>Plugging in during the green times vs. the red times can
                            reduce your carbon footprint by an average of</i>
                        <br />
                        <p className='charge-percentage'>{this.state.percentage}%</p>
                        <i>Note: all predictions are based on 2022 data for California only. See FAQs for further details.</i>
                    </div>


                </Container>
            </div>);
    }
}