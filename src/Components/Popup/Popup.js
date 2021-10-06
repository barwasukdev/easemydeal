import React, { useState, useEffect } from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import HTMLReactParser from 'html-react-parser';
import {Link} from "react-router-dom";



const Popup = (props) => {
    state = {
        open: false
    };
    
    onOpenModal = (Percentage, Description, TermsCondition, Productimage) => {
        this.setState({
            open: true,
            percentage: Percentage,
            desc: Description,
            terms: TermsCondition,
            imgsrc: Productimage,
    
        });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    const { open } = this.state;
  return(
      
      <div>
           {
                    allContent.map((data, i) => {
                        return (
                            <Modal open={open} onClose={this.onCloseModal} >
                                <div>
                                    <div className="coupon-in">
                                        <div className="row">
                                            <div className="col-md-4 col-xs-3">
                                                <div className="popupleft">
                                                    <img
                                                        src={(this.state.imgsrc)}
                                                        className="img-responsive"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-xs-9">
                                                <div className="popupright">
                                                    <h3>{this.state.percentage} Off</h3>
                                                    <p>{HTMLReactParser(this.state.desc)}</p>
                                                    <div className="buy-btn hidden-xs">
                                                        <Link to="/recharge-feed">Recharge Now</Link>
                                                        <a href="">Claim Voucher</a>
                                                        <a href="">Buy Voucher</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 visible-xs">
                                                <div className="buy-btn">
                                                    <Link to="/recharge-feed">Recharge Now</Link>
                                                    <Link to="/">Claim Voucher</Link>
                                                    <Link to="/">Buy Voucher</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="full-width">
                                                    <h3>Terms &amp; Conditions:</h3>
                                                    {HTMLReactParser(this.state.terms)}
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )
                    })
                }
      </div>
    
   )

 }

export default Popup;