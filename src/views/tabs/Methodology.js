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
                    <h1>Methodology</h1>
                    <h2>Data</h2>
                    <h4><a href="https://www.eia.gov/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">The U.S. Energy Information Administration (EIA)</a></h4>
                    <h4><a href="https://ncar.ucar.edu/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">The National Center for Atmospheric Research (NCAR)</a></h4>
                    <h4><a href="https://www.energy.ca.gov/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">California Energy Commission</a></h4>
                    <h2>Modeling</h2>
                    <h3>Model Architecture & Pipeline</h3>
                    <p>Darts’ implementation of LightGBM – a gradient boosting framework that uses a tree based machine
                        learning algorithm adapted for time series forecasting. A few key advantages include fast training
                        speed, high efficiency, low memory usage, accuracy, and capacity to handle large-scale data.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/data_pipeline_diagram.png"
                        style={{ width: '50%', height: 'auto' }} />
                    <h3>Data Split</h3>
                    <p>We trained our LightGBM model on our target series and past covariates using EIA data from July 1, 2018
                        to December 31, 2020. We used the EIA data from January 1, 2021 to December 31, 2021 to validate our model
                        using an expanding window time series validation framework (see the Model Training section below).</p>
                    <p>After feature engineering and hyper-parameter tuning, we retrained the model on the July 1, 2018 to
                        December 31, 2021 data and run our finished model to predict carbon intensity for all of 2022.</p>
                    <h3>Model Inputs</h3>
                    <h4>Target Series: Carbon Intensity</h4>
                    <p>The EIA dataset includes hourly historical carbon intensity in pounds per kilowatt hour, so we use these
                        historical numbers as our target series for our model.</p>
                    <h4>Past & Future Covariates</h4>
                    <p>Past and future covariates provide helpful context to improve the prediction of our target series.</p>
                    <p>Past covariates refer to variables measured in the past that impact the target series we are modeling — for example,
                        the historical net generation of solar, wind, and natural gas or the historical demand for electricity.</p>
                    <p>Future covariates are variables that hold information about the future at the time of prediction. Temporal attributes,
                        such as the hour of the day or solar generation forecasts, are examples of future covariates. To improve our model,
                        we created net generation forecasts for the different energy sources using the LightGBM modeling framework before
                        predicting the carbon intensity.</p>
                    <p>Temporal attributes, like the year, month, day of the week, and week of the year, can be used as past and future covariates.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/model_inputs_diagram.png"
                        style={{ width: '50%', height: 'auto' }} />
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
