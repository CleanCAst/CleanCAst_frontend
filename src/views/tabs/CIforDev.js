import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function CIforDev() {


    return (
        <>
            <div className="section">
                <Container>
                    <h2>Testing if Chart is always available</h2>
                    <iframe width="800" height="600" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/net_generation_and_co2_forecasts_viz.html"></iframe>
                </Container>
            </div>
            <div className="section" id="ci-for-dev">

                <Container>
                    <hr className="line-primary" />

                </Container >
            </div ></>
    );
}