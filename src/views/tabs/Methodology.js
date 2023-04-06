import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function Methodology() {

    return (
        <>
            <div className="section" id="methodology">
                {/* <img
                    alt="..."
                    width={1000}
                    style={{ left: -200, top: 0 }}
                    className="path"
                    src={require("assets/img/path3.png")} /> */}
                <Container>
                    <hr className="line-primary" />
                    <h1 className="text-white">Methodology</h1>
                    <h2>Data</h2>
                    <h4>EIA</h4>
                    <p>“The U.S. Energy Information Administration (EIA) collects, analyzes, and disseminates independent
                        and impartial energy information to promote sound policymaking, efficient markets, and public
                        understanding of energy and its interaction with the economy and the environment.” – EIA</p>
                    <h4>NCAR</h4>
                    <p>“The National Center for Atmospheric Research (NCAR) is a center of research excellence in Earth
                        system science sponsored by the National Science Foundation.” – NCAR</p>
                    <h2>Modeling</h2>
                    <p>LightGBM – a gradient boosting framework that uses tree based learning algorithms. A few key
                        advantages we found with this model is its fast training speed, high efficiency, low memory usage,
                        accuracy, and capacity to handle large-scale data.</p>
                </Container>
            </div></>
    );
}

{/* <div className="squares square1" />
<div className="squares square2" />
<div className="squares square3" />
<div className="squares square4" />
<div className="squares square5" />
<div className="squares square6" />
<div className="squares square7" /> */}
