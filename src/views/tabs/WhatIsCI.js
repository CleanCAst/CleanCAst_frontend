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
                            {/* <br />
                            <MathJax.Provider>
                                <MathJax.Node formula={eq} />
                            </MathJax.Provider>
                            <br /> */}
                            <h3>Why Carbon Intensity Matters</h3>
                            <p>Carbon intensity is a measure of carbon dioxide (CO2) emitted per unit of energy consumed.</p>
                            <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/carbon_intensity_formula.png"
                                style={{ width: '100%', height: 'auto' }} />
                            <p>California has recently launched significant initiatives to put more EVs on the road and phase out natural gas
                                heaters and stoves. However, unlike fossil fuels, which emit the same amount of (CO<sub>2</sub>) whenever you burn them, the
                                indirect emissions of electrically powered vehicles and appliances varies significantly based on what powers
                                the grid at that time. To fully realize the benefits of electrification and achieve climate goals, it is therefore
                                crucial to maximize electricity consumption when electricity is greenest.</p>
                            <h4>Shifting consumption from high to low carbon intensity times reduces CO2 emitted by approximately half!</h4>
                            <h3>Why Carbon Intensity Forecasting is Challenging</h3>
                            <p>Carbon intensity varies by hour, day, and season due to changes in electricity demand, intermittent renewables generation
                                (mainly solar and wind), and conventional generation (natural gas, coal). Even if each of these elements could be individually
                                forecasted with accuracy, the amounts supplied and generated are matched in a regulated marketplace. Like every other marketplace,
                                wholesale electricity prices and supply, demand, and carbon intensity fluctuate. California also imports energy from other regions
                                to address imbalances, adding to the complexity.</p>
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
