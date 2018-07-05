/**
 * @desc 组件的入口
 */

import React, { Component } from 'react';

import Navs from "./page/nav.js";
import Logo from "./page/logo.js";
import Tabs from "./page/tab.js";
import Goods from "./page/goods.js";
import Totals from "./page/total.js";
import Ads from "./page/ads.js";
import Footers from "./page/footer.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navs />
        <Logo />
        <Tabs />
        <Goods />
        <Totals />
        <Ads />
        <Footers />
      </div>
    );
  }
}

export default App;
