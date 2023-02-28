/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

export default function WeeklyUpdate3_1() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <HomePageNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white"> Weekly Update </h1>
                <h3>March 1 </h3>
                <div className="btn-wrapper mb-3">
                </div>
              </Col>
              <Col lg="4" md="5">
                <i className="fa-solid fa-charging-station" style={{ fontSize: 200 }}></i>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
          <hr className="line-primary" />
            <h2>Updates</h2>
            <h4>
              <ul>
                <li>(Kurt - 2 min) LightGBM topline metric update:</li>
                <ul>
                  <li>Best smoothing/statistical MAPE: around 14%</li>
                  <li>LightGBM baseline MAPE: 11.03%</li>
                  <li>LightGBM MAPE: 7.53% (3.5 pct points lower than LightBGM baseline)</li>
                </ul>
                <li>(Kurt - 2 min) LightGBM training updates</li>
                <ul>
                  <li>Best lags: 2 weeks, week of year and other time features help a little</li>
                  <li>Best feature: CO2 emissions from natural gas power plants</li>
                  <li>Retrain every month leads to ~0.5 point change in MAPE slight improvement, probably less overfitting (see next 2 slides)</li>
                </ul>
                <li><p className="text-muted">LightGBM baseline: use outcome variable in last 96 hr to predict outcome variable in next 96 hr</p></li>
              </ul>
            </h4>
            <img
              src={require("assets/img/weekly_updates/weekly_update_3_1_img1.png")}
            />
            <img
              src={require("assets/img/weekly_updates/weekly_update_3_1_img2.png")}
            />
          </Container>
        </div>
        <div className="section">
          <Container>
          <hr className="line-primary" />
            <h2>Up Next</h2>
            <h4>
              <ul>
                <li>Switch over to Sagemaker and get everything working</li>
                <ul>
                  <li>Darts</li>
                  <li>Tensorboard</li>
                  <li>Optuna for hyperparameter tuning</li>
                </ul>
                <li>Continue to run experiments </li>
                <li>Drop a lower performing model by end of next week</li>
                <li>Articulate our “wow factor”</li>
                <li>Look at pricing data after Mar 15</li>
                <li>Continue to work on source forecasts (i.e. how much solar or natural gas will be produced in 24 hours?)
                  This was biggest driver of model performance for CarbonCast</li>
              </ul>
            </h4>
          </Container>
        </div>
        <div className="section">
          <Container>
          <hr className="line-primary" />
            <h2>Help us pick a name!</h2>
            <h4>
              <ul>
                <li>Green Juice</li>
                <li>Green Grid Forecast (ChatGPT)</li>
                <li>WhenToCharge</li>
                <li>PowerPal (ChatGPT)</li>
                <li>Low CarbCharge</li>
                <li>ChargeRight</li>
                <li>WattWise (ChatGPT)</li>
                <li>CleanCast (ChatGPT)</li>
                <li>CarbonCharge (ChatGPT)</li>
              </ul>
            </h4>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}