import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";




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
            <div className="section" id="ci-for-dev">
                <Container>
                    <hr className="line-primary" />
                    <h1 className="text-white">Carbon Intensity for Developers</h1>

                </Container >
            </div ></>
    );
}