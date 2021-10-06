import React, { Component } from 'react';
import voucher from '../../Json/voucher.json';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import HTMLReactParser from 'html-react-parser';
import {Link } from "react-router-dom";

class Offertabs extends Component {
    state = {
        open: false
    };


    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            allContent: [],
            percentage: '',
            desc: '',
            terms: '',
            imgsrc: '',

        };
    }
    componentDidMount() {
        var arrContent = []
        voucher.result.map(
            (data) => {
                arrContent.push(data.content)
            });
        this.setState({
            allData: voucher.result,
            allContent: arrContent
        });
    }


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
    render() {
        const { open } = this.state;
        const allData = this.state.allData;
        const allContent = this.state.allContent;
        return (
            <div>
                <section className="offer-tabs hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="top-heads">
                                    <h2>Best Vouchers &amp; Gift-Cards</h2>
                                </div>
                                <ul className="nav nav-tabs">
                                    {allData.map((data, i) => {
                                        return (
                                            <li key={data.tab} className={i == 0 ? "active" : ""}>
                                                <a
                                                    data-toggle="tab"
                                                    href={`#tab-${i}`}
                                                    onclick="load_img('popular_brand');"
                                                >
                                                    <img
                                                        src={data.icon}
                                                    />
                                                    {data.tab}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="tab-content">
                                    {allContent.map((data, i) => {
                                        return (
                                            <div className={`tab-pane fade${i == 0 ? " active in" : ""
                                                }`}
                                                id={`tab-${i}`}
                                                key={i}>

                                                {
                                                    data.map((content) => {
                                                        return (
                                                            <div className="col-md-3">
                                                                <div className="offer-detail" type="button" key={i} onClick={() => this.onOpenModal(content.Percentage, content.Description, content.TermsCondition, content.Productimage)}>
                                                                    <div className="left-off">
                                                                        <p>{content.Percentage} <span>Off</span></p>
                                                                    </div>
                                                                    <div className="right-off">
                                                                        <img
                                                                            src={(content.Productimage)}
                                                                            className="img-reponsive"
                                                                            alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="more_brouchers">
                                                    <a href="#">
                                                        Load More
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
}
export default Offertabs;