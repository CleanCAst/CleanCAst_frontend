import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import WhenToCharge from "./tabs/WhenToCharge";
import WhatIsCI from "views/tabs/WhatIsCI";
import Methodology from "views/tabs/Methodology";
import ModelResults from "views/tabs/ModelResults";
import FutureResearchOpps from "views/tabs/FutureResearchOpps";
import FAQ from "views/tabs/FAQ";


export default function HomePage() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <HomePageNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <WhenToCharge></WhenToCharge>
          <WhatIsCI />
          <Methodology />
          <ModelResults />
          <FutureResearchOpps />
          <FAQ />

        </div>
        <Footer />
      </div>
    </>
  );
}


