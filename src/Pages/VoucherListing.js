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
                        <section className="voucher-listing">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="left_category_deals">
                                            <div className="category_list">
                                                <div className="filterMain">
                                                    <p className="headingFilter gapBottom clearfix">Categories</p>
                                                    <div className="flightFilters">
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="all" />
                                                            <label>
                                                                <span className="box check_arrow" data-list_type="all"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">All</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="fashion" />
                                                            <label>
                                                                <span className="box " data-list_type="fashion"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Fashion</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="food" />
                                                            <label>
                                                                <span className="box " data-list_type="food"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Food</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="travel" />
                                                            <label>
                                                                <span className="box " data-list_type="travel"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Travel</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="entertainment" />
                                                            <label>
                                                                <span className="box " data-list_type="entertainment"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Entertainment</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="electronics" />
                                                            <label>
                                                                <span className="box " data-list_type="electronics"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Electronics</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                        <span className="checkbox-group gapBottom">
                                                            <input type="checkbox" name="voucher_category[]" className="voucher_category" defaultValue="others" />
                                                            <label>
                                                                <span className="box " data-list_type="others"><span className="check" /></span>
                                                                <div className="leftLable">
                                                                    <div className="topFlex">
                                                                        <p className="font14 lineHeight18">Others</p>
                                                                    </div>
                                                                    <div className="rightLabel font14"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                                                                </div>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="filter_top">
                                                    <p>Filter by</p>
                                                    <ul className="list-inline list-unstyled">
                                                        <li><a href="javascript:void(0);" id="sortby_price_filter" onclick="sort_voucher('P_LH');">Price</a></li>
                                                        <li><a href="javascript:void(0);" id="sortby_brand_filter" onclick="sort_voucher('B_LH');">Brand</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="filter_right">
                                                    <select className="form-control" onchange="sort_voucher_change(this.value);" id="price_filter_select">
                                                        <option value="P_LH">Sort by Low to high</option>
                                                        <option value="P_HL">Sort by High to low</option>
                                                    </select>
                                                </div>
                                            </div>
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
