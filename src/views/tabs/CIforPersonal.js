import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// plotly data viz
import WhenToCharge from "../../components/data_viz/WhenToCharge"
import TestPlot from "../../components/data_viz/plot-react"

let ps = null;

export default function CIforPersonal() {

    return (
        <>
            <div className="section" id="ci-for-personal">
                <Container>
                    <hr className="line-primary" />
                    <h1 className="text-white">Carbon Intensity for Personal Charging</h1>
                    <h3>When to Charge</h3>
                    <TestPlot></TestPlot>
                    <WhenToCharge></WhenToCharge>
                </Container>
            </div></>
    );
}