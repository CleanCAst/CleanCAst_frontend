import React from "react";

// reactstrap components
import {
    Container,
} from "reactstrap";

// plotly data viz
import WhenToCharge from "../../components/data_viz/WhenToCharge"

let ps = null;

export default function CIforPersonal() {

    return (
        <>
            <div className="section" id="ci-for-personal">
                <Container>
                    <hr className="line-primary" />
                    <h1 className="text-white">Carbon Intensity for Personal Charging</h1>
                    <h3>When to Charge</h3>
                    <WhenToCharge></WhenToCharge>
                </Container>
            </div></>
    );
}