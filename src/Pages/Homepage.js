import React, { Component } from "react";
import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer.js";
import { Helmet } from "react-helmet";
import Verticaltabs from "../Components/Verticaltabs/Verticaltabs.js";
import Offertabs from "../Components/Offertbas/Offertabs.js";
import Topslider from "../Components/Topslider/Topslider.js";


class Homepage extends Component {

  render() {

    return (
      <div>
        <div className="">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Easemydeal
            </title>
            <meta
              name="title"
              content="Easemydeal"
            ></meta>
            <meta
              name="description"
              content=""
            ></meta>
            <meta
              name="keywords"
              content="Test"
            ></meta>
            <link rel="canonical" href="#" />
          </Helmet>
          <div>
            <Header />
            <Topslider />
            <Offertabs />
            <Verticaltabs />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
