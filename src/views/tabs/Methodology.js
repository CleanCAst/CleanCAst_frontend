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

                    <h2>The CleanCAst Data Pipeline</h2>
                    {/* <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/data_pipeline_diagram.png"
                        style={{ width: '50%', height: 'auto' }} /> */}

                    <h2>Data Sources</h2>

                    <h3>We built CleanCAst using a data pipeline that aggregates data from the following sources:</h3>
                    <h4><a href="https://www.eia.gov/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">The U.S. Energy Information Administration (EIA)</a> supplied actual historical
                        hourly generation data by source (natural gas, solar, nuclear, etc.) for the entire California grid,
                        and total CO<sub>2</sub> emissions for each source.
                    </h4>
                    <h4><a href="https://ncar.ucar.edu/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">The National Center for Atmospheric Research (NCAR) Research Data Archive</a> supplied
                        historical hourly weather forecasts for each latitude and longitude at increments of 0.25° via the
                        <a href="https://rda.ucar.edu/datasets/ds084-1/"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank"> NCEP GFS 0.25 Degree Global Forecast Grids Historical Archive ds084.1</a>, which we
                        matched to centroids of CEC resource regions below.
                    </h4>
                    <h4><a href="https://www.energy.ca.gov/"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">California Energy Commission</a> supplied maps of
                        <a href="https://cecgis-caenergy.opendata.arcgis.com/maps/CAEnergy::solar-resource-areas-2022"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank"> Solar Resource Areas and Wind Resource Areas</a>, as well as generating capacity of those
                        regions. The geographic centroids of each solar region were calculated from shapefiles and capacity-weighted
                        weather and solar radiation forecasts were incorporated into the pipeline.
                    </h4>

                    <h4>The <a href="https://sunrise-sunset.org/api"
                        style={{ color: '#4e8538', textDecoration: 'underline' }}
                        target="_blank">Sunrise Sunset API</a> supplied exact sunrise and sunset times in UTC for each day, based on
                        orientation of earth relative to the sun, for each solar resource area.</h4>

                    <h3>Model Architecture</h3>
                    <p>Our forecasting model is centered around a Darts implementation of LightGBM—a gradient boosting framework that
                        uses a tree based machine learning algorithm adapted for time series forecasting. A few key advantages include
                        fast training speed, high efficiency, low memory usage, accuracy, and capacity to handle large-scale data.</p>

                    <h4>Model Inputs</h4>

                    <h5>Target Series: Carbon Intensity</h5>
                    <p>The EIA dataset includes hourly historical carbon intensity in pounds per kilowatt hour, so we use these historical
                        numbers as our target series for our model.</p>

                    <h5>Past & Future Covariates</h5>
                    <p>Past and future covariates provide helpful context to improve the prediction of our target series.</p>
                    <p>Past covariates refer to variables measured in the past that impact the target series we are modeling — for example,
                        the historical net generation of solar, wind, and natural gas or the historical demand for electricity.</p>
                    <p>Future covariates are variables that hold information about the future at the time of prediction. Temporal attributes, such as
                        the hour of the day or solar generation forecasts, are examples of future covariates. To improve our model, we created net
                        generation forecasts for the different energy sources using the LightGBM modeling framework before predicting the carbon intensity.</p>
                    <p>Temporal attributes, like the year, month, day of the week, and week of the year, can be used as past and future covariates.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/covariates_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <h4>Data Split</h4>

                    <p>We trained our LightGBM model on our target series of carbon intensity and leveraged EIA data from July 1, 2018 to December 31, 2020.
                        We used the EIA data from January 1, 2021 to December 31, 2021 to validate our model using an expanding window time series validation
                        framework (see the Model Training section below). After feature engineering and hyper-parameter tuning, we retrained the model on the
                        July 1, 2018 to December 31, 2021 data and ran our finished model to predict carbon intensity for all of 2022.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/train_test_split_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <h3>Model Training</h3>

                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/retrain_96_diagram.png"
                        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/retrain_24_96_diagram.png"
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

                    <h2>Results</h2>

                    <p>Our 96 hour forecasts predicted the carbon intensity of the California electric grid with a mean MAPE of 7.97%, which represents an
                        improvement on <a href="https://dl.acm.org/doi/abs/10.1145/3563357.3564079?casa_token=CeA1nMIPh5IAAAAA%3AxDiQjLgfwJRBKzNto9QkRWVl8Xp1n4LhIKdp0PNxnKX1TdzzVYb7psXmIAuQ2cgYHIeDQufyXTWi"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">leading academic studies</a> in the field on this topic. In practice, this means we forecasted the carbon intensity
                        to within 8% of the actual carbon intensity.</p>

                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/model_mape_results_table.png"
                        style={{ width: '50%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <p>Comparing our forecasts to one another, while the shorter interval forecasts were more accurate, model degradation was relatively modest
                        for longer forecast intervals, and the median average MAPE was 7.2%, indicating that half of our forecasts predict within a 7% margin of
                        true value, and a few substandard forecasts account for a higher average MAPE. The forecasts made during the first 24 hours are accurate
                        to within 6% of the actual carbon intensity level.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/forecast_mape_results_table.png"
                        style={{ width: '35%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <p>The model performed well at times when natural gas, solar, and wind generation was similar from day to day, increasing at a linear rate
                        with regular fluctuations, or decreasing at a linear rate with regular fluctuations. Dramatic changes, especially in wind or natural gas
                        generation (either increases or decreases) contributed to some of the worst performing forecasts. Below are some of the best, worst, and
                        typical forecasts made by the model.</p>

                    <p>Additional error analysis, with time series analysis techniques like the ACF, PACF, and Ljung-Box Test of the residuals, reveal non-white
                        noise errors. However, the predicted values are close enough to the real values to be practically useful, and the CleanCAst results are
                        competitive with other publicly available carbon intensity forecast models.</p>

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
