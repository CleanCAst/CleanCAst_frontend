// https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb
import React from 'react';
import Plot from 'react-plotly.js';
import * as d3 from 'd3';


// import data 
import forecasts from "../../data/forecast.json"

export default class WhenToCharge extends React.Component {
    state = {
        line: {
            // x: [1, -2, -1],
            x: [Object.keys(forecasts['2021-01-01'])][0].map(Number),
            // y: [1, 2, 3],
            y: [Object.values(forecasts['2021-01-01'])][0].map(Number),
            name: 'Line',
            date: '2021-01-01'
        },
        redbars: {
            x: [6, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86],
            y: Array(24).fill(1),
            type: "bar",
            marker: {
                color: 'red'
            },
            hoverinfo: 'skip',
            opacity: 0.4
        },
        greenbars: {
            x: [17, 18, 19, 20, 21, 22, 41, 42, 43, 44, 45, 46, 47, 65, 66, 67, 68, 69, 70, 90, 91, 92, 93, 94],
            y: Array(24).fill(1),
            type: "bar",
            marker: {
                color: 'LightGreen'
            },
            hoverinfo: 'skip',
            opacity: 0.4
        },
        layout: {
            datarevision: 0,
            title: 'When to Charge',
            xaxis: {
                title: 'UTC Time',
                tickmode: 'array',
                tickvals: [6, 17, 22, 26, 38, 41, 47, 65, 70, 76, 79, 81, 86, 90, 94],
                ticktext: ['10 pm', '9 am', '2 pm', '6 pm', '6 am', '9 am', '3 pm', '9 am', '2 pm', '8 pm', '11 pm', '1 am', '6 am', '10 am', '2 pm'],
            },
            yaxis: {
                title: 'Carbon Intensity',
                visible: false,
                showticklabels: false
            },
            showlegend: false,
            height: 400,
            width: 1100,
            shapes: [{
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
            }],
            annotations: [{
                x: 6,
                y: 0.5,
                text: 'Friday<br>January 1',
                showarrow: false
            }],
            bargap: 0,
            bargroupgap: 0
        },
        revision: 0,
    }

    // ---------- HANDLE DATE/TIME ----------
    // define days and months arrays
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // add hours to the timestamp
    addHours(numbers, timestamp, edges) {
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
    }

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
            var Q = []
            x_arr.forEach((num_x, index) => {
                const num_y = y_arr[index];
                if (num_y >= Q0_lim && num_y <= Q1_lim) {
                    Q.push(num_x)
                }
            });
        };

        // create Q4 array 
        if (quantile == 'Q4') {
            var Q = []
            x_arr.forEach((num_x, index) => {
                const num_y = y_arr[index];
                if (num_y >= Q3_lim && num_y <= Q4_lim) {
                    Q.push(num_x)
                }
            });
        };

        return Q;
    };

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
      }

    // ---------- UPDATE GRAPH ---------- 
    updateGraph = () => {
        const { line, redbars, greenbars, layout } = this.state;

        // update lines and bars 
        line.y = [Object.values(forecasts[line.date])][0].map(Number);
        const Q4 = this.createQuantArray(this.state.line.x, this.state.line.y, 'Q4');
        const Q1 = this.createQuantArray(this.state.line.x, this.state.line.y, 'Q1');
        redbars.x = Q4;
        greenbars.x = Q1;

        // update xaxis
        const q4Edges = this.addAdjacentMissingNumbers(Q4)
        const q1Edges = this.addAdjacentMissingNumbers(Q1)
        var allEdges = [...new Set([...q4Edges, ...q1Edges])].sort((a, b) => a - b)

        // update date annotation
        line.date = document.getElementById("dateInput").value
        this.datetime_utc = new Date(line.date + ' 00:00:00 AM UTC');
        layout.annotations[0].text = this.days[this.datetime_utc.getUTCDay()] + '<br>' + this.months[this.datetime_utc.getUTCMonth()] + ' ' + this.datetime_utc.getUTCDate()

        // update times 
        const newTimes = this.addHours(line.x, this.datetime_utc, allEdges);
        console.log(allEdges)
        console.log(newTimes)

        layout.xaxis.tickvals = allEdges
        layout.xaxis.ticktext = newTimes

        //update state
        this.setState({ revision: this.state.revision + 1 });
        layout.datarevision = this.state.revision + 1;

    }

    // ---------- HTML ---------- 
    render() {
        return (
            <div>

                <fieldset>
                    <p>Select a Date:</p>
                    <input
                        type="date"
                        id="dateInput"
                        min="2021-01-01"
                        max="2021-12-31"
                    />
                    <button onClick={this.updateGraph}>Go!</button>
                </fieldset>
                <Plot
                    data={[
                        this.state.line,
                        this.state.redbars,
                        this.state.greenbars
                    ]}
                    layout={this.state.layout}
                    revision={this.state.revision}
                    graphDiv="graph"
                />
            </div>);
    }
}