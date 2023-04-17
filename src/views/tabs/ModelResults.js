import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function ModelResults() {


    return (
        <>
            <div className="section" id="model-results">
                <Container>
                    <hr className="line-primary" />
                    <h1>Model Results</h1>

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
                        generation (either increases or decreases) contributed to some of the worst performing forecasts.</p>

                    <p>Additional error analysis, with time series analysis techniques like the ACF, PACF, and Ljung-Box Test of the residuals, reveal non-white
                        noise errors. However, the predicted values are close enough to the real values to be practically useful, and the CleanCAst results are
                        competitive with other publicly available carbon intensity forecast models.</p>

                </Container >
            </div ></>
    );
}