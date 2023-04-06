import React from "react";

// core components
import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import IndexNavbar from "components/Navbars/examples/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/examples/IndexSections/Basics.js";
import Navbars from "views/examples/IndexSections/Navbars.js";
import Tabs from "views/examples/IndexSections/Tabs.js";
import Pagination from "views/examples/IndexSections/Pagination.js";
import Notifications from "views/examples/IndexSections/Notifications.js";
import Typography from "views/examples/IndexSections/Typography.js";
import JavaScript from "views/examples/IndexSections/JavaScript.js";
import NucleoIcons from "views/examples/IndexSections/NucleoIcons.js";
import Signup from "views/examples/IndexSections/Signup.js";
import Examples from "views/examples/IndexSections/Examples.js";
import Download from "views/examples/IndexSections/Download.js";

export default function Index() {
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
          <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}


