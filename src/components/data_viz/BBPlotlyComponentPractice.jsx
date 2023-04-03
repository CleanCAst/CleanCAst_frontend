import React from 'react';
import Plot from 'react-plotly.js';

function BBPlotlyComponentPractice(props) {
    const AreaChart = (props) => {
        var data = [
            {
                x: [1, 2, 3, 4],
                y: [0, 2, 3, 5],
                fill: 'tozeroy',
                type: 'scatter',
                name: 'Vendor'
            },
            {
                x: [1, 2, 3, 4],
                y: [3, 5, 1, 7],
                fill: 'tonexty',
                type: 'scatter',
                name: 'Provider'
            }
        ];

        return (
            <Plot
                data={data}
                layout={{ width: 500, height: 500, title: 'Area Chart' }} />
        )
    }
}

export default BBPlotlyComponentPractice;

