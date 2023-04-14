import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function TechnicalDetails() {


    return (
        <>
            <div className="section">
                <Container>
                    <h2>Testing Tom's slider viz</h2>
                    <iframe width="1000" height="900" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/carbon_intensity_and_source_double_axis_single_slider_plot.html"></iframe>
                </Container>
            </div>
            <div className="section">
                <Container>
                    <h2>Testing Tom's double slider viz</h2>
                    <iframe width="1000" height="1400" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/carbon_intensity_and_source_two_charts_single_slider_plot.html"></iframe>
                </Container>
            </div>
            <div className="section">
                <Container>
                    <h2>Testing public url for html data viz files</h2>
                    <iframe width="800" height="600" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/net_generation_and_co2_forecasts_viz.html"></iframe>
                </Container>
            </div>
            <div className="section" id="technical-details">
                <Container>
                    <hr className="line-primary" />
                    <h1>Carbon Intensity for Developers</h1>

                </Container >
            </div ></>
    );
}