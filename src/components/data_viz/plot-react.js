// import React, { useState, useEffect } from "react";
// import Plot from "react-plotly.js";

// // import data 
// import forecasts from "../../data/forecast.json"

// class TestPlot extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {
//                     x: [1, 2, 3],
//                     y: [2, 6, 3],
//                     type: 'scatter',
//                     mode: 'lines+markers',
//                     marker: { color: 'red' },
//                 }
//             ], layout: {
//                 width: 320, height: 240, title: 'A Fancy Plot',
//                 // datarevision: this.state.revise
//             }, frames: [], config: {}
//         };
//     };

//     runFunction() {
//         this.state.data = {
//             x: [5, 2, 3],
//             y: [2, 6, 3],
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: { color: 'red' },
//         }
//         console.log("Running")
//     };



//     render() {
//         return (
//             <div>
//                 <button onClick={TestPlot.runFunction()}>Click Me</button>
//                 <Plot
//                     data={this.state.data}
//                     layout={this.state.layout}
//                     frames={this.state.frames}
//                     config={this.state.config}
//                     onInitialized={(figure) => this.setState(figure)}
//                     onUpdate={(figure) => this.setState(figure)}
//                 />
//             </div>

//         );
//     }
// }

// export default TestPlot;

// https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb
import React from 'react';
import Plot from 'react-plotly.js';
export default class TestPlot extends React.Component {
  state = {
    line1: {
      x: [-3, -2, -1],
      y: [1, 2, 3], 
      name: 'Line 1'
    },
    line2: {
      x: [1, 2, 3],
      y: [-3, -2, -1],
      name: 'Line 2'
    }, 
    layout: { 
      datarevision: 0,
    },
    revision: 0,
  }
  componentDidMount() {
    setInterval(this.increaseGraphic, 1000);
  } 
  rand = () => parseInt(1 + this.state.revision, 10);
  increaseGraphic = () => {
    const { line1, line2, layout } = this.state;
    line1.x.push(this.rand());
    line1.y.push(this.rand());
    if (line1.x.length >= 10) {
      line1.x.shift();
      line1.y.shift();
    } 
    line2.x.push(this.rand());
    line2.y.push(this.rand());
    if (line2.x.length >= 10) {
      line2.x.shift();
      line2.y.shift();
    }
    this.setState({ revision: this.state.revision + 1 });
    layout.datarevision = this.state.revision + 1;
  }
  render() {  
    return (<div>
      <Plot 
        data={[
          this.state.line1,
          this.state.line2,
        ]}
        layout={this.state.layout}
        revision={this.state.revision}
        graphDiv="graph"
      />
    </div>);
  }
}