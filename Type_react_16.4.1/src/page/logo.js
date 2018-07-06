import React,{Component} from "react";
import "../assets/css/logo.css";


class Logo extends Component{
    render (){
        let logoStyle = {
            backgroundImage:"url("+require("../assets/img/logo.png")+")"
        }
        return (
            <section id="logo">
                <div className="container">
                    <div className="head_left_logo fl">
                        <div className="logo fl" style={logoStyle}></div>
                        <div className="tb_title">淘宝网</div>
                        <h1 className="fl">购物车</h1>
                    </div>
                    <div className="head_right_search fr">
                        <select name="sear_items" id="sear_items">
                            <option selected>宝 贝</option>
                            <option>天 猫</option>
                            <option>店 铺</option>
                        </select>
                        <input type="text" name="search"/>
                        <button>搜 索</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Logo;