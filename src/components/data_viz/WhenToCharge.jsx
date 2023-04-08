import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import * as d3 from 'd3';

// import data 
import forecasts from "../../data/forecast.json"

function WhenToCharge(props) {
    const [data, setData] = useState({});

    // ---------- SET VARS ---------- 
    // define x and y 
    // var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]
    // var y = [0.5126941487542015, 0.580114635031987, 0.6051751097056121, 0.6118492163239028, 0.6152387862242452, 0.6232499628798149, 0.6269867084196087, 0.6346325061305926, 0.6303501495779834, 0.6267536824932293, 0.6277638732935915, 0.6270495365358444, 0.6276919213537351, 0.6269574993426972, 0.624313888651661, 0.5999243210498644, 0.5015773591139077, 0.4010455628097311, 0.38119840787121, 0.3661264723436701, 0.3651959790229121, 0.3679146730220691, 0.3769723137911762, 0.4254109532672459, 0.5757475038201288, 0.6360202105431313, 0.6420402248666484, 0.641916744777624, 0.642999709836199, 0.6451781603465537, 0.6528518248776644, 0.6504359932065722, 0.6453480311058527, 0.646302663576956, 0.6461410259978629, 0.6453182179909024, 0.6461779722420217, 0.6465681994030322, 0.6454452771981469, 0.62194335105942, 0.5058247990976014, 0.4134603104902338, 0.3763177621679461, 0.3611998348703711, 0.353017604710345, 0.3542718335251166, 0.368547765859968, 0.4244048506469287, 0.5209647698587849, 0.580829116344416, 0.6022006282760987, 0.6029170356136396, 0.6046692482533529, 0.605758429203525, 0.6121247368977417, 0.6095918042023721, 0.6082369617440233, 0.6089184774680315, 0.6091159268441997, 0.6092748726898253, 0.6094969226828097, 0.6102578334532965, 0.6091931903915567, 0.5903501495291023, 0.499076360012959, 0.4057434497084367, 0.3763561164727075, 0.3651652917703625, 0.3711423121591365, 0.3771478290656226, 0.3972946622718087, 0.4500126501943886, 0.5736227558241989, 0.6165257698889242, 0.6279833654140669, 0.6361417079315959, 0.6437940927052139, 0.6447334115859121, 0.6445089902840234, 0.6418507218297357, 0.6402444737174519, 0.64250729125185, 0.6418492401001613, 0.6413932159941436, 0.6417399691590439, 0.6413755609768784, 0.6418401780990408, 0.623549391302401, 0.5364183518567093, 0.4493458962297728, 0.4184841156698681, 0.4090288336558041, 0.4141465558661119, 0.4110613623386396, 0.4123952120869136, 0.4502766804380302]

    var date = '2021-12-01';
    var x = [Object.keys(forecasts[date])][0].map(Number)
    // var y = [Object.values(forecasts[date])][0].map(Number)
    var y = [Object.values(forecasts[date])][0].map(Number);
    var datetime = new Date(date + ' 00:00:00 AM UTC');


    // ---------- USER INPUT ---------- 
    // get input from user 
    window.onload = function () {
        var date_input = document.getElementById("dateInput");
        if (date_input) {
            date_input.addEventListener("change", function () {
                datetime = new Date(this.value + ' 00:00:00 AM UTC');
                y = [Object.values(forecasts[this.value])][0].map(Number);
                console.log(y);
            })
        }
    };

    // ---------- DATE/TIME ----------
    // define days and months arrays
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // const hours = hours_raw.map(hour => {
    //     // return`${date} + ${hour}`
    //     const hour12 = (hour % 12) || 12; // converts to 12-hour format
    //     const amPm = hour < 12 ? "AM" : "PM"; // adds am or pm
    //     return `${hour12}${amPm}`; // combines hour and am/pm into a string
    // });

    // ---------- QUANTILES ---------- 
    // create quantile arrays 
    function create_quant_array(x_arr, y_arr) {
        
        // set limits for quantiles 
        const Q0_lim = d3.quantile(y_arr, 0);
        const Q1_lim = d3.quantile(y_arr, 0.25);
        const Q2_lim = d3.quantile(y_arr, 0.5);
        const Q3_lim = d3.quantile(y_arr, 0.75);
        const Q4_lim = d3.quantile(y_arr, 1);
        
        // create Q1 array
        const Q1 = []
        x_arr.forEach((num_x, index) => {
            const num_y = y_arr[index];
            if (num_y >= Q0_lim && num_y <= Q1_lim) {
                Q1.push(num_x)
            }
        });

        // createe Q4 array 
        const Q4 = []
        x_arr.forEach((num_x, index) => {
            const num_y = y_arr[index];
            if (num_y >= Q3_lim && num_y <= Q4_lim) {
                Q4.push(num_x)
            }
        });
        
        return [Q1, Q4];
    };
    const [Q1, Q4] = create_quant_array(x, y)

    // ---------- VISUALIZATION ---------- 
    // useEffect(() => {
    //     Plotly.react('plot_div', [data], layout);
    // }, [data])
    // create viz 
    const state = {
        data: [
            { // gray line
                x: x,
                y: y,
                type: "scatter",
                mode: 'lines',
                line: {
                    color: 'grey'
                },
                hovertext: y,
                opacity: 0.4,
                hovertemplate: '%{x} <br> CO2 Emissions Intensity: %{y}<extra></extra>'
            },
            { // red bars
                x: Q4,
                y: Array(24).fill(1), // Array(24).fill(Math.max(...y)),
                type: "bar",
                marker: {
                    color: 'red'
                },
                hoverinfo: 'skip',
                opacity: 0.4
            },
            {
                x: Q1,
                y: Array(24).fill(1), // Array(24).fill(Math.max(...y)),
                type: "bar",
                marker: {
                    color: 'LightGreen'
                },
                hoverinfo: 'skip',
                opacity: 0.4
            }
        ],
        layout: {
            title: 'When to Charge',
            // datarevision: this.state.revise,
            xaxis: {
                title: 'UTC Time',
                tickmode: 'array',
                tickvals: x,
                ticktext: x
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
                text: days[datetime.getDay()] + '<br>' + months[datetime.getMonth()] + ' ' + datetime.getDate(),
                showarrow: false
            }],
            bargap: 0,
            bargroupgap: 0
        }
    };

    return (
        <div id="plot_div">
            <fieldset>
                <p>Select a Date:</p>
                <input
                    type="date"
                    id="dateInput"
                    min="2021-01-01" 
                    max="2021-12-31"
                />
            </fieldset>
            <Plot
                data={state.data}
                layout={state.layout}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
            />
        </div>
    );
}

export default WhenToCharge;

// data={[line, red_bars, green_bars]}

    // const line = {
    //     x: x,
    //     y: y,
    //     type: "scatter",
    //     mode: 'lines',
    //     line: {
    //         color: 'grey'
    //     },
    //     hovertext: y,
    //     opacity: 0.4,
    //     hovertemplate: '%{x} <br> CO2 Emissions Intensity: %{y}<extra></extra>'
    // }

    // const red_bars = {
    //     x: Q4,
    //     y: Array(24).fill(1), // Array(24).fill(Math.max(...y)),
    //     type: "bar",
    //     marker: {
    //         color: 'red'
    //     },
    //     hoverinfo: 'skip',
    //     opacity: 0.4
    // }

    // const green_bars = {
    //     x: Q1,
    //     y: Array(24).fill(1), // Array(24).fill(Math.max(...y)),
    //     type: "bar",
    //     marker: {
    //         color: 'LightGreen'
    //     },
    //     hoverinfo: 'skip',
    //     opacity: 0.4
    // }



    // {{
                //     title: 'When to Charge',
                //     xaxis: {
                //         title: 'UTC Time',
                //         tickmode: 'array',
                //         tickvals: x,
                //         ticktext: x
                //     },
                //     yaxis: {
                //         title: 'Carbon Intensity',
                //         visible: false,
                //         showticklabels: false
                //     },
                //     showlegend: false,
                //     height: 400,
                //     width: 1100,
                //     shapes: [{
                //         type: 'line',
                //         x0: 0,
                //         x1: 0,
                //         y0: 0,
                //         y1: 1,
                //         line: {
                //             color: 'black',
                //             width: 3,
                //             dash: 'dash'
                //         }
                //     }],
                //     annotations: [{
                //         x: 6,
                //         y: 0.5,
                //         text: days[datetime.getDay()] + '<br>' + months[datetime.getMonth()] + ' ' + datetime.getDate(),
                //         showarrow: false
                //     }],
                //     bargap: 0,
                //     bargroupgap: 0
                // }}