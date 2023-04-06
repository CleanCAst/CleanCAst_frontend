import React from "react";

// core components
import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import WhatIsCI from "views/tabs/WhatIsCI";
import Methodology from "views/tabs/Methodology";
import CIforPersonal from "views/tabs/CIforPersonal";
import CIforDev from "views/tabs/CIforDev";


export default function HomePage() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
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
          <WhatIsCI />
          <Methodology />
          <CIforPersonal />
          <CIforDev />

        </div>
        <Footer />
      </div>
    </>
  );
}


