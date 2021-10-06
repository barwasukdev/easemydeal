import React, { Component } from "react";
import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer.js";
import { Helmet } from "react-helmet";

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
            <section className="recharge-feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inside-forms">
                <form action="recharge-feed_submit" method="get" acceptCharset="utf-8">
                  <div className="form-group">
                    <select name className="form-control">
                      <option value>Option Here 1</option>
                      <option value>Option Here 2</option>
                      <option value>Option Here 3</option>
                      <option value>Option Here 4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" name placeholder="Enter Subscriber Id" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" name placeholder="Enter Amount" />
                  </div>
                  <button type className="submit-btms">Proceed to Recharge</button>
                </form>
                <h3>Terms &amp; Conditions</h3>
                <ul>
                  <li>In Case of Recharge Failure, the same Amount of Voucher will be issued which can be claimed using Claim Voucher feature. </li>
                  <li>The voucher comes with the Specified Expiry Period mentioned on Voucher. User can always claim refund of amount in case of Recharge Failure and get Voucher cancelled.</li>
                  <li>For cancellation of Voucher/ To claim refund kindly drop an email at support@easemydeal.com or call +91-89296-50-238</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
