import React, { Component } from 'react';
import '../css/HeaderNav.css'

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-wrapper">
      <div id="brand-wrapper">
          <img  id="brand-logo"src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f558a_space-logo.svg"/>
          <span id="brand-name">BookCheck</span>
      </div>
      <div id="social-btn-wrapper">
          <a href="http://facebook.com/webflow" class="social-btn">
              <img src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5592_facebook-icon_black.svg" class="social-img"/>
          </a>
          <a href="http://twitter.com/webflowapp" class="social-btn">
              <img src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5590_twitter-icon_black.svg" class="social-img"/>
          </a>
      </div>
  </div>
    );
  }
}

export default HeaderNav;