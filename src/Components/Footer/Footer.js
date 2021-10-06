import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
function Footer() {
  return (
    <div>
       <footer className="footer-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-in-widget">
                                        <div className="about-comp">
                                            <img src="images/logo-2.png" className="img-reponsive" alt="" />
                                        </div>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-in-widget">
                                        <h2>Company</h2>
                                        <ul>
                                            <li><a href>About Us</a></li>
                                            <li><a href>Privacy policy</a></li>
                                            <li><a href>Terms of Use</a></li>
                                            <li><a href>Blog</a></li>
                                            <li><a href>Branding</a></li>
                                            <li><a href>Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-in-widget">
                                        <h2>General</h2>
                                        <ul>
                                            <li><a href>Partner With Us</a></li>
                                            <li><a href>Write to Us</a></li>
                                            <li><a href>Mobile Apps</a></li>
                                            <li><a href>Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-in-widget">
                                        <h2>More Offers</h2>
                                        <ul>
                                            <li><a href>City Offers</a></li>
                                            <li><a href>Brand Offers</a></li>
                                            <li><a href>Product Deals</a></li>
                                            <li><a href>Indian Internet Mobile Stats</a></li>
                                            <li><a href>Charities</a></li>
                                            <li><a href>Gift Cards</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
    </div>
  );
}

export default Footer;
