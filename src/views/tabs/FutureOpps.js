import React from "react";

// reactstrap components
import {
    Container,
} from "reactstrap";

export default function FutureOpps() {

    return (
        <>
            <div className="section" id="future-opps">
                <Container>
                    <hr className="line-primary" />
                    <h1>Future Opportunities</h1>
                    <p> <u>Curtailment studies:</u> According to the CAISO, the California Independent System Operator in March 2023, 600 fewer GWh of
                        renewable energy flowed from utilities to consumers than the grid was capable of producing. This temporary phenomenon,
                        called curtailment, occurs either when system-wide electricity supplies exceed demand, or when local distribution bottlenecks
                        occur due to insufficient transmission capacity. Across the state, the ratio of system to local curtailment used to be 50%/50%
                        (as recently as 2015), but as California’s renewables capacity has grown, local curtailment now comprises 90% of all curtailment.
                        Forecasting curtailment and encouraging consumption of electricity in the right locations at the right would be especially impactful
                        to the climate, but availability of granular local electricity data is crucial. This issue will only become more important as
                        California’s renewables capacity grows.</p>
                    <img src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Diagrams/curtailment.png"
                        style={{ width: '50%', height: 'auto', display: 'block', margin: 'auto' }} />

                    <div style={{ textAlign: 'center' }}>
                        Source: <a href="http://www.caiso.com/informed/Pages/ManagingOversupply.aspx"
                            style={{ color: '#4e8538', textDecoration: 'underline' }}
                            target="_blank">California ISO Managing Oversupply</a>
                    </div>
                    <p></p>
                    <p><u>Net Generation Forecasts by Source:</u> Our current model uses only 24 hour natural gas, solar, wind, hydro, and coal generation
                        forecasts as future covariates into the model forecasting carbon intensity. Consequently, the forecasts made through the first day of the
                        forecast window are significantly more accurate than the remaining forecasts. A more complex model architecture may be able to input net
                        generation 96 hour predictions into the carbon intensity model.</p>


                </Container>
            </div></>
    );
}