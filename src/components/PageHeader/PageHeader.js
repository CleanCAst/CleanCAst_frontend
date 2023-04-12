import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      
      <Container>
        <div className="content-center brand">
          <img src={require("assets/img/CleanCAst_logo_green.png")} />
          <br/>
          <h3>Carbon Intensity Forecasting for<br/>California’s Electrical Grid</h3>
        </div>
      </Container>
    </div>
  );
}