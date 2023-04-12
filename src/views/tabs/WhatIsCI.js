import React from "react";

// mathjax
import MathJax from "react-mathjax";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

export default function WhatIsCI() {

    const eq = '\\text{Carbon Intensity} = \\frac{\\text{CO}_2 \\text{ released in lbs}}{\\text{kW·h electricity generated}}';

    return (
        <>
            <div className="section" id="what-is-ci">
                <img
                    alt="..."
                    width={900}
                    style={{ right: 0 }}
                    className="path"
                    src={require("assets/img/path4.png")} />
                <Container className="align-items-center">
                    <hr className="line-primary" />
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h1> What is Carbon Intensity? </h1>
                            <br />
                            <MathJax.Provider>
                                <MathJax.Node formula={eq} />
                            </MathJax.Provider>
                            <br />
                            <h3>Definition of carbon intensity</h3>
                            <p>Carbon intensity is the amount of carbon dioxide (CO<sub>2</sub>) emitted per unit of energy consumed.
                                Because different sources emit different amounts of CO<sub>2</sub>, the carbon intensity of the electricity 
                                you use varies throughout the day.</p>
                            <h3>Why do we care about carbon intensity?</h3>
                            <p>We care about carbon intensity because carbon dioxide significantly contributes to climate
                                change. Reducing carbon intensity is a critical part of efforts to address climate change
                                because it helps reduce greenhouse gases emitted into the atmosphere. By reducing carbon
                                intensity, we can slow the rate of climate change and limit its impacts. Decelerating climate
                                change can significantly improve air quality, reduce energy costs, and create new economic
                                opportunities in the transition to a low-carbon economy.<br /><br />
                                Let's reduce carbon intensity to mitigate climate change and achieve a more sustainable,
                                equitable, and prosperous future for all!</p>
                            <div className="btn-wrapper mb-3">
                            </div>
                        </Col>
                        <Col lg="4" md="5">
                            <i className="fa-solid fa-charging-station" style={{ fontSize: 200 }}></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}
