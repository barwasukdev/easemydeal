import React, { Component } from 'react';

class Verticaltabs extends Component {
    render() {
        return (
            <div>
                <section className="verticla-tabs visible-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="top-heads">
                                    <h2>Best Vouchers &amp; Gift-Cards</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in" type="button" data-toggle="modal" data-target="#couponmodal">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/airtel.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>2% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/jio.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/vodafoneidea.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/bsnl.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/mtnl.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/dishtv.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3%<span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/videocond2h.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/tatasky.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>4% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/sundirect.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>3% <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/airteltv.png" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>Rs. 149 <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/buywow-logo.jpg" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="verticlal-tab-in">
                                    <div className="top-v-left">
                                        <p>Rs. 99 <span>Off</span></p>
                                    </div>
                                    <div className="top-v-right">
                                        <img src="images/amazon-logo.jpg" className="img-reponsive" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="more_brouchers">
                                <a href="#">Load More </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="verticla-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="top-heads">
                                    <h2>Deal of the Day &amp; Offers</h2>
                                </div>
                                <div className="tab">
                                    <button className="tablinks" onclick="openCity(event, 'Popular')" id="defaultOpen">
                                        <img className="img-reponsive" alt="Popular" src="images/popular_brand.png" /> Popular
                                    </button>
                                    <button className="tablinks" onclick="openCity(event, 'Fashion')">
                                        <img className="img-reponsive" alt="Popular" src="images/fashion_brands.png" /> Fashion
                                    </button>
                                    <button className="tablinks" onclick="openCity(event, 'Food')">
                                        <img className="img-reponsive" alt="Popular" src="images/food_brands.png" />
                                        Food</button>
                                    <button className="tablinks" onclick="openCity(event, 'Travel')">
                                        <img className alt="Popular" src="images/travel_brands.png" /> Travel
                                    </button>
                                    <button className="tablinks" onclick="openCity(event, 'Entertainment')">
                                        <img className alt="Popular" src="images/entertainment_brands.png" /> Entertainment
                                    </button>
                                    <button className="tablinks" onclick="openCity(event, 'Recharge')">
                                        <img src="images/most-used.svg" /> Recharge &amp; DTH
                                    </button>
                                    <button className="tablinks" onclick="openCity(event, 'Others')">
                                        <img className alt="Popular" src="images/others_brands.png" /> Others
                                    </button>
                                </div>
                                <div id="Popular" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="verticlal-tab-in">
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B084HG3V6V&asins=B084HG3V6V&linkId=5164482539b0a4f37bab82dfca5c8942&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B071GF7MNY&asins=B071GF7MNY&linkId=d8dd60348714dc0ece3021c3b8f77068&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B088KK3M88&asins=B088KK3M88&linkId=fc900830500180056c7ffabd063c3b10&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B088KFMKTK&asins=B088KFMKTK&linkId=db441a0a488270938c01d9641a294d28&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B07VX3P226&asins=B07VX3P226&linkId=253d66275aee0127cc0797f3277a08eb&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                                <iframe style={{ width: '120px', height: '240px', float: 'left', margin: '20px 22px' }} marginWidth={0} marginHeight={0} scrolling="no" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=inditab09-21&marketplace=amazon&region=IN&placement=B07WXW8V4X&asins=B07WXW8V4X&linkId=6090ee721e7fb5a6d4725f61eb8bfb70&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff" frameBorder={0}>
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Fashion" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Food" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Food</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Travel" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Travel</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Entertainment" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Entertainment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Recharge" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Recharge and DTH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Others" className="tabcontent">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="verticlal-tab-in">
                                                <p>Others</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Verticaltabs;