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

                    <h2>The CleanCAst data pipeline</h2>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/final_data_pipeline_diagram.png"
                        style={{ width: '100%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <h2>Data sources</h2>

                    <p>We built CleanCAst using a data pipeline that aggregates data from the following sources:</p>
                    <ul>
                        <li><a href="https://www.eia.gov/"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">The U.S. Energy Information Administration (EIA)</a> supplied actual historical
                            hourly generation data by source (natural gas, solar, nuclear, etc.) for the entire California grid,
                            and total CO<sub>2</sub> emissions for each source.
                        </li>

                        <li><a href="https://www.eia.gov/"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">The U.S. Energy Information Administration (EIA)</a> supplied actual historical
                            hourly generation data by source (natural gas, solar, nuclear, etc.) for the entire California grid,
                            and total CO<sub>2</sub> emissions for each source.
                        </li>
                        <li><a href="https://ncar.ucar.edu/"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">The National Center for Atmospheric Research (NCAR) Research Data Archive</a> supplied
                            historical hourly weather forecasts for each latitude and longitude at increments of 0.25° via the
                            <a href="https://rda.ucar.edu/datasets/ds084-1/"
                                style={{ color: '#4e8538', textDecoration: 'underline' }}
                                target="_blank"> NCEP GFS 0.25 Degree Global Forecast Grids Historical Archive ds084.1</a>, which we
                            matched to centroids of CEC resource regions below.
                        </li>
                        <li><a href="https://www.energy.ca.gov/"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">California Energy Commission</a> supplied maps of
                            <a href="https://cecgis-caenergy.opendata.arcgis.com/maps/CAEnergy::solar-resource-areas-2022"
                                style={{ color: '#4e8538', textDecoration: 'underline' }}
                                target="_blank"> Solar Resource Areas and Wind Resource Areas</a>, as well as generating capacity of those
                            regions. The geographic centroids of each solar region were calculated from shapefiles and capacity-weighted
                            weather and solar radiation forecasts were incorporated into the pipeline.
                            <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/data_sources_solar_resource_areas_image.png"
                                style={{ width: '35%', height: 'auto', display: 'block', margin: 'auto' }} />
                        </li>

                        <li>The <a href="https://sunrise-sunset.org/api"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">Sunrise Sunset API</a> supplied exact sunrise and sunset times in UTC for each day, based on
                            orientation of earth relative to the sun, for each solar resource area.
                            <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/data_sources_suns_rays_and_latitude_image.png"
                                style={{ width: '40%', height: 'auto', display: 'block', margin: 'auto' }} />
                            <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/data_sources_solar_radiation_graph_image.png"
                                style={{ width: '60%', height: 'auto', display: 'block', margin: 'auto' }} />
                        </li>
                    </ul>


                    <h2>Model architecture</h2>
                    <p>Our forecasting model is centered around a Darts implementation of LightGBM—a gradient boosting framework that
                        uses a tree based machine learning algorithm adapted for time series forecasting. A few key advantages include
                        fast training speed, high efficiency, low memory usage, accuracy, and capacity to handle large-scale data.
                    </p>

                    <h3>Model inputs</h3>

                    <h4>Target series: carbon intensity</h4>
                    <p>The EIA dataset includes hourly historical carbon intensity in pounds per kilowatt hour, so we use these historical
                        numbers as our target series for our model.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/eda_charts.png"
                        style={{ width: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
                    <h4>Past & future covariates</h4>
                    <p>Past and future covariates provide helpful context to improve the prediction of our target series.</p>
                    <br />
                    <p>Past covariates refer to variables measured in the past that impact the target series we are modeling — for example,
                        the historical net generation of solar, wind, and natural gas or the historical demand for electricity.</p>
                    <br />
                    <p>Future covariates are variables that hold information about the future at the time of prediction. Temporal attributes, such as
                        the hour of the day or solar generation forecasts, are examples of future covariates. To improve our model, we created net
                        generation forecasts for the different energy sources using the LightGBM modeling framework before predicting the carbon intensity.</p>
                    <br />
                    <p>Temporal attributes, like the year, month, day of the week, and week of the year, can be used as past and future covariates.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/covariates_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <h3>Data split</h3>

                    <p>We trained our LightGBM model on our target series of carbon intensity and leveraged EIA data from July 1, 2018 to December 31, 2020.
                        We used the EIA data from January 1, 2021 to December 31, 2021 to validate our model using an expanding window time series validation
                        framework (see the Model Training section below). After feature engineering and hyper-parameter tuning, we retrained the model on the
                        July 1, 2018 to December 31, 2021 data and ran our finished model to predict carbon intensity for all of 2022.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/train_test_split_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <h3>Model design</h3>

                    <p>Our EIA dataset had hourly records of energy generation and consumption by source—the amount of wind, solar, natural gas, etc.,
                        produced and consumed across the grid. As mentioned above, to make the most accurate forecast, the model used these known values from
                        the past (past covariates) and projections about what those generation figures might be in the future (future covariates). These future
                        covariates are intermediate forecasts that improve accuracy but also introduce design complications. As a result, we created a composite
                        96 hour forecast consisting of a regular 96 hour forecast that excluded energy forecasts as future covariates and a 24 hour forecast that
                        included energy forecasts as future covariates. This 24 + 96 structure proved effective and enabled us to avoid time-leakage problems
                        while working within the constraints of our model architecture. See Model Construction below for implementation details. </p>

                    <h3>Model construction</h3>
                    <h4><b>Step 1:</b> 24 Hour Forecasts</h4>
                    <p>We first generate 24 hours of predictions every 24 hours and include future covariates like the net generation forecast of natural gas
                        or solar energy production. The net generation forecasts for natural gas and solar are possible because a 24 hour forecast made every 24 hours
                        does not create duplicate values for each timestamp.</p>
                    <h4><b>Step 2:</b> 96 Hour Forecasts</h4>
                    <p>For the 96 hour forecasts, we cannot include the net generation forecasts as future covariates. This is because 96 hour predictions created
                        every 24 hours produces duplicate forecasts for each timestamp.</p>
                    <h4><b>Step 3:</b> 24 + 96 Hour Forecasts</h4>
                    <p>To create the best set of model predictions, we use the 24 hour forecasts that include the net generation forecasts as future covariates to
                        overwrite the first 24 hours of predictions from the 96 hour forecasts. </p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/expanding_window_training_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <p>To examine the model’s performance during training and testing, we used an expanding window cross-validation strategy with retraining
                        every month to generate carbon intensity forecasts. </p>

                    <h3>Metric</h3>

                    <p>To examine the performance of the model during training and testing, we utilized an expanding window cross-validation strategy with
                        retraining every month to generate carbon intensity forecasts. We use average mean absolute percentage error (MAPE) to measure the
                        accuracy of our model.</p>

                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/mape_img.png"
                        style={{ width: '50%', height: 'auto', display: 'block', margin: 'auto' }} />
                    <p>In more practical terms, MAPE represents the difference between the dotted line of the forecasted carbon intensity relative to the
                        solid line of the actual carbon intensity. Since there are 365 days in our test set in 2022, we have 365 MAPE scores that we combine
                        to create our performance metric of average MAPE.</p>

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
