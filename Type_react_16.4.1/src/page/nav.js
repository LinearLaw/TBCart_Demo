import React ,{Component} from "react";
import "../assets/css/nav.css";

class Navs extends Component{
    render(){
        return (
            <div id="nav">
                <div id="TB_nav">
                    <div className="container">
                        <ul className="left_Nav fl">
                            <li className="otherColor"><a>username</a></li>
                            <li><a>消息</a></li>
                            <li className="otherColor"><a>手机逛淘宝</a></li>
                        </ul>
                        <ul className="right_nav fr">
                            <li><a>淘宝网首页</a></li>
                            <li className="otherColor"><a>我的淘宝</a></li>
                            <li><a>购物车</a></li>
                            <li className="otherColor"><a>收藏夹</a></li>
                            <li className="otherColor"><a>商品分类</a></li>
                            <li className="otherColor"><a>卖家中心</a></li>
                            <li className="otherColor"><a>联系客服</a></li>
                            <li><a>网站导航</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navs;