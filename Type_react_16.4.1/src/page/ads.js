/**
 * 
 */
import React,{Component} from "react";
import "../assets/css/ads.css"

class Ads extends Component {
    render(){
        return (
            <section id="ads">
                <div className="container">
                    <div className="hot_ads_title">
                        <ul>
                            <li><a href="#">掌柜热卖</a></li>
                            <li><a href="#">最近收藏的</a></li>
                            <li><a href="#">最近浏览的</a></li>
                            <li><a href="#">猜你喜欢的</a></li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="hot_ads_content">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">Slide 1</div>
                                <div className="swiper-slide">Slide 2</div>
                                <div className="swiper-slide">Slide 3</div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount(){
        let swiper = new window.Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 1500,
            autoplayDisableOnInteraction: false,
            observer:true,
            observeParents:true
        });
    }

}
export default Ads;
