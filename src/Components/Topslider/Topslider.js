import React, { Component } from 'react';
import Slider from '../../Json/Slider.json'
class Topslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            SliderData: '',
            SliderImage: []
        }
    }
    componentDidMount() {
        this.setState({
            SliderData: Slider.top_gift_cards,
            SliderImage: Slider.top_gift_cards.image
        })
    }
    render() {
        const SliderData = this.state.SliderData
        const SliderImage = this.state.SliderImage
        return (
            <div>

                <section className="top-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="top-slider-in">
                                    <div className="top-slider-offer owl-carousel owl-theme">
                                        {SliderImage.map((data, i) => {
                                            return (
                                                <div className="item">
                                                    <div className="client_inner_slide">
                                                        <a href="#">
                                                            <img
                                                                src={data.image_url}
                                                                title={data.title}
                                                                alt={data.title}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        {/* <div className="item wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1000ms">
                                            <div className="slide-imgs">
                                                <img src="images/discount-offer.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="item wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1000ms">
                                            <div className="slide-imgs">
                                                <img src="images/promo-code.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="item wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1000ms">
                                            <div className="slide-imgs">
                                                <img src="images/discount-code.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="item wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1000ms">
                                            <div className="slide-imgs">
                                                <img src="images/Offer Code.jpg" alt="" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-xs">
                                <div className="flip-slider">
                                    <div className="ind-flip-imgs">
                                        <img src="images/flip-1.png" alt="" />
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
export default Topslider;