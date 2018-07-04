import React ,{Component} from "react";
import "../assets/css/footers.css";

class Footers extends Component {
    render (){
        return (
            <footer id="footer">
                <div className="container">
                    <div className="foot_paterner">
                        <ul  className="clearfix" v-if="service">
                            <li v-for="server in service"><a href="server.url">server.content</a></li>
                        </ul>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className="foot_copyright">
                        <div className="line_1">
                            <ul className="clearfix" v-if="navinfo">
                                <li v-for="infos in navinfo"><a href="infos.url">infos.content</a></li>
                            </ul>
                        </div>
                        <div className="line_2">
                            <ul className="clearfix" v-if="copys">
                                <li v-for="about in copys"><a href="about.url">about.content</a></li>
                            </ul>
                        </div>
                        <div className="line_3 clearfix">
                            <div className="marker fl"></div>
                            <span>浙公网安备 33010002000078号</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footers;