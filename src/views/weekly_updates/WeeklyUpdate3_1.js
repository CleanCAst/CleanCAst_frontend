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

// plotly data viz
<<<<<<< HEAD
import PlotlyComponent2 from "../../components/data_viz/PlotlyComponent2" 
=======
import PlotlyComponent from "../../components/data_viz/PlotlyComponent"
>>>>>>> 773417eda72d819830e0c5ad1bc9ecfde4886420


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
                  <li>Best smoothing/statistical MAPE: 13.56%</li>
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
            <img
              src={require("assets/img/weekly_updates/weekly_update_3_1_img4.png")}
            />
            <img
              src={require("assets/img/weekly_updates/weekly_update_3_1_img3.png")}
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
                <li>Continue to run experiments with LightGBM and TFT models </li>
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
                <li>Green Grid Forecast</li>
                <li>WhenToCharge</li>
                <li>PowerPal</li>
                <li>Low CarbCharge</li>
                <li>ChargeRight</li>
                <li>WattWise</li>
                <li>CleanCAst</li>
                <li>CarbonCharge</li>
                <li>CarbonWise</li>
                <li>Green Gauge</li>
                <li>Carbon IQ</li>
              </ul>
            </h4>
          </Container>
        </div>
        <div className="section">
          <Container>
            <h2>Testing plotly animations</h2>
            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~bronte-baer/3.embed"></iframe>
          </Container>
        </div>
        <div className="section">
          <Container>
            <h2>Testing plotly animations</h2>
            <iframe width="800" height="600" frameborder="0" scrolling="no" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/energy_type_ng_month.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIAyVDowh7U8tI5JzCbDshjoKS0PGGUUQ%2FfH%2BFcJZ2hTRAiEA5foRxc%2BQJvb2h0%2F23N2SNGzMKSA%2B8LZ%2B0P34f70gDosqiAMInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw5NjU2NDY5OTU4NDMiDFHR3TeT17WPz5UsHyrcAjoOtp93FJ3yCMWiHPjgroyb%2BqI6%2FZH7JPcOBKGRZiUqXOpgFh6FB6ae7rYBx1VBHrB%2F3cIBp7yUmMAyS3z7mRIwVTSF8T8bEgEwh%2FncdKmQGmqYXRXz0Z%2FHcqSiUmxT2k%2FVD9AXS4g7TX9T7hMUD4EnZzjWrtDJtq90e6sea6c11p4k4x4COudL863YcKPqzocrSxG7ulTJ6g5%2BQRwVvooqW9QGcp2FpZCEZHFAoasyapj4gKapN3UyfHslTUFzh0aEPNbTDXo8ikpNthVVeC96gnqKg3sNnjqWuBVA%2FgZd7nQybUEGZ9BpjI4ITZnvT1MsHmPVO4gwVTvcfI66rEPKGd1gm8y3pP%2BwZsjZoY42LUjHdr4N3FojX2IRLunz5A65tD57PGhPI%2FQYV8wlxPzUBlc2XgghZQDtIkyjBNgyIeb9aSKxcrG3Rpcl2yqFmpixqwBZmikTV8udozDD%2FbSgBjqzAlf5%2BF8dtcUv9B81eAmHl3DCR4X9qUTJdfaH5DmGIMuaKVCZQYPIURmtAPC3t%2B7ljCklh6Ofze2gvTkrPJOI%2BphAloHZlZt2iuasGUIdbDdel4jtC6AlmWcWO9Rss0pSCGGXfQ71Sec6h36bSaCfSJF2w67ssU1W%2Bkq76m%2BRCwEF7KFd4f5qmEg0vowCgqNdJ4cPDBPnKd2CI40syyQx2MHfC3PnVujVmEcXZa76Fu4pQs4nEF4frGfyxDROG3nMFwtdVLkbUfCWAcCbKrzreq%2BT%2FtBgc28VY2dCBldGvsSDdGUUzqMSD5Rm7tHJKRNWsPCVPxOcpLdm62tbzRPxpfwg2LlukqoaQHyY%2F2gpU59hcHMMYIHg4n8B5lrlfYKrkrEdXxNpdPZLNbQxceKKxg%2FrUwY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230312T031929Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIA6BVIL2GBRZYGUPOL%2F20230312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e35d298744d7959d0a6fc3694478b63b8bced1d4423e26e66a9fcfb43c8197ca"></iframe>
          </Container>
        </div>
        <div className="section">
          <Container>
            <h2>Dummy Animation</h2>
            <PlotlyComponent2></PlotlyComponent2>
          </Container>
        </div>
        <div className="section">
          <Container>
            <h2>BB Testing Dummy Animation</h2>
            <PlotlyComponent></PlotlyComponent>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
:diffg LO}
