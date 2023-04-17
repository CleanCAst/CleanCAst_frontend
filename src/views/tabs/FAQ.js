import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function FAQ() {


    return (
        <>
            <div className="section">
                <Container>
                    <h2>Carbon Intensity Forecasting & Energy Source Net Generation</h2>
                    <iframe width="1200" height="800" frameBorder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/website_slider_viz.html"></iframe>
                    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <iframe width="4000" height="1400" frameBorder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/website_slider_viz.html"></iframe>
                    </div> */}
                </Container>
            </div>
            {/* <div className="section">
                <Container>
                    <h2>Testing Tom's double slider viz</h2>
                    <iframe width="1000" height="1400" frameBorder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/carbon_intensity_and_source_two_charts_single_slider_plot.html"></iframe>
                </Container>
            </div>
            <div className="section">
                <Container>
                    <h2>Testing public url for html data viz files</h2>
                    <iframe width="800" height="600" frameBorder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/net_generation_and_co2_forecasts_viz.html"></iframe>
                </Container>
            </div> */}
            <div className="section" id="technical-details">
                <Container>
                    <hr className="line-primary" />
                    <h1>FAQ</h1>

                    <ol>
                        <li>Why study direct emissions vs. lifecycle emissions vs. marginal operating emission rate?</li>
                        <p>Various entities who study carbon intensity have differing views on the best metric to measure climate impact of electricity consumption.
                            Although we focused on a carbon intensity metric driven by direct emissions, different choices could be more appropriate depending on
                            context and application:</p>
                        <ul>
                            <li>Direct emissions: the CO2 emissions generated by the production of electricity. Different reporting agencies use different emissions
                                factors and units of measurement. One example would be the EIA calculation, which estimates that each kilowatt hour of electricity
                                produced by natural gas power plants contribute about 0.9 pounds of carbon dioxide. The CleanCAst model attempts to predict the number
                                of pounds of carbon dioxide created per kilowatt of energy produced across the entire CAISO electric grid.</li>
                            <li>Lifecycle emissions: the CO2 emissions generated by a power plant, including the development and maintenance of associated infrastructure.
                                A solar farm would have direct emission of zero, but a positive amount of lifecycle emissions since some carbon was created during the
                                construction of the solar power plant.</li>
                            <li>Marginal operating emissions rate (MOER): an estimate of the change in emissions caused by a change in electrical load (demand). This is
                                a theoretical figure, but has been very credibly estimated by WattTime. For parties interested in shifting the demand curve to allocate
                                energy optimally, this is the emissions figure to use. See the paper <a href="https://www.watttime.org/app/uploads/2022/10/WattTime-MOER-modeling-20221004.pdf"
                                    style={{ color: '#4e8538', textDecoration: 'underline' }}
                                    target="_blank">here</a>. </li>
                        </ul>

                        <li>Why MAPE and not MAE?</li>
                        <p>Mean absolute percentage error (MAPE) is normalized to the true value of the number you are trying to predict. A MAPE of 5% means the estimate
                            was off by 5% of the true value. For example, if the true value was 200 and one predicted the value to be 210 or 190, then the MAPE would be 5%.
                            Particularly in cases where the target variable approaches zero or differs by orders of magnitude in peak-to-trough, MAPE can provide misleading
                            indicators of model performance, but our target variable is constrained to between about 0.2 and 0.9 so MAPE is still appropriate for this machine
                            learning task. Mean absolute error (MAE) is very similar to MAPE, but is not normalized to the true value. Going back to our previous example, if
                            the true value was 200 and one predicted 210 or 190, then the MAE would be 10. But 10 what? Without context, it can be challenging to interpret MAE
                            without domain-specific knowledge.</p>

                        <li>Why don’t you use real-time data?</li>
                        <p>Not all of the data used in our model is consistently available in real-time. In particular, the EIA only published some data, notably the hourly
                            electricity interchange levels, 2 days after the fact. A next step would be to query CAISO or some other entity to measure the interchange in real-time,
                            estimate the carbon emissions imported and exported, and then alter the California emissions estimate with those import/export effects included.</p>

                        <p>Similarly, hourly weather forecast data from NCAR of weather at 0.25° latitude and longitude intervals is not easily accessible in real-time. While it
                            is possible to integrate with a global weather monitoring system powered by supercomputers, the infrastructure needed to access, process, and extract
                            this data from a non-public source was beyond the scope of this model development process. If not constrained by funds, there may be better non-public
                            sources for weather that could prove useful in future studies. </p>

                        <li>Why don’t you focus on renewable energy curtailment?</li>
                        <p>First, curtailment is hard to predict. Solar power plant generation tends to follow seasonal and daily weather patterns. On the other hand, curtailment
                            is created by various complex human and natural systems.</p>

                        <p>Second, the availability of sufficient data is an issue. Even if state-wide curtailment data was available in 2018, about 90% of curtailment is “local curtailment,”
                            which is an amalgamation of many local issues in various geographies. We anticipate its forecast will require much more granular data than is currently available.
                            The CAISO curtailment data we obtained included substantial gaps in their curtailment estimates, making time series forecasting difficult.</p>
                    </ol>

                </Container >
            </div ></>
    );
}