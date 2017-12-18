import React, { Component } from 'react';
import SocialImage from './SocialImage';
import BrandLogo from './BrandLogo';
import '../css/HeaderNav.css'

class HeaderNav extends Component {
  render() {
    return (
        <div className="header-wrapper">
        <div id="brand-wrapper">
            <BrandLogo id="brand-logo"/>
            <span id="brand-name">BookCheck</span>
        </div>
        <div id="social-btn-wrapper">
            <SocialImage href="http://facebook.com/webflow"
                         aCSS="social-btn" 
                         src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5592_facebook-icon_black.svg"
                         imgClass="social-img"/>
            <SocialImage href="http://twitter.com/webflowapp"
                         aCSS="social-btn" 
                         src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5590_twitter-icon_black.svg"
                         imgClass="social-img"/>
            </div>
        </div>
    );
  }
}

export default HeaderNav;