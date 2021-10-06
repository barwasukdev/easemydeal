import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
      this.state = {
      category: "Search here...",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header id="header" className>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-xs-9">
                <div className="top-logo">
                  <div id="gBurger" className="hidden-lg hidden-md hidden-sm ham-icon">
                    <span />
                    <span />
                    <span />
                  </div>
                  <Link to="/" title="Easemydeal">
                    <img src="../assets/images/logo.png" className="img-reponsive" alt="Easemydeal" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 hidden-xs">
                <div className="searc-areas">
                  <div className="search_area">
                    <div className="search_area_inside search_icon_b">
                      <form>
                        <input type="search" name="Search" id="searchkeyword" className="form-control" defaultValue required="required" placeholder="Search here..." />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-3">
                <div className="right-headers text-right">
                  <div className="notifications">
                    <a href>
                      <img src="assets/images/notifications.svg" alt="" />
                      <span>2</span>
                    </a>
                  </div>
                  <div className="login-signup hidden-xs">
                    <a href>Log In/Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>{/* /header */}
        
        <div className="my-sidenav">
          <div className="cross-btn1">×</div>
          <ul>
            <li className="menu-drop"><Link to="/">Home</Link></li>
            <li className="menu-drop"><a href="index.html">Store</a></li>
            <li className="menu-drop"><a href="index.html">Categories</a></li>
            <li className="menu-drop"><a href="index.html">Indulge</a></li>
            <li className="menu-drop"><a href="index.html">Deals Of The Day</a></li>
            <li className="menu-drop"><a href="index.html">Log In/Sign Up</a></li>
          </ul>
        </div>
        <section className="second-menus hidden-xs">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="left-tabs-menus">
                  <ul className="list-inline">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/voucher-listing">Voucher Listing</Link></li>
                    <li><Link to="/recharge-feed">Recharge Feed</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-5">
                <div className="deals-of-days">
                  <a href>Deals Of The Day</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;