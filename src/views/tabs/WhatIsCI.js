import React from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function WhatIsCI() {

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
                            <h1 className="text-white"> What is Carbon Intensity? </h1>
                            <h3>Definition of carbon intensity</h3>
                            <p>Carbon intensity is the amount of carbon dioxide (CO2) emitted per unit of energy consumed.
                                It measures the carbon emissions from generating and consuming energy, such as electricity
                                or transportation fuel.</p>
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
