import React, { Component } from 'react';
import SocailImage from './SocialImage';
import BrandLogo from './BrandLogo';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer-wrapper">
            <div id="footer-logo-wrapper">
              <BrandLogo id="footer-logo"/>
            </div>
            <div id="footer-social-wrapper">
                <SocialImage href="http://facebook.com/webflow"
                             aCSS="social-btn footer-social-btn" 
                             src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5592_facebook-icon_black.svg"
                             imgClass="footer-social-img"/>
                <SocialImage href="http://twitter.com/webflowapp"
                             aCSS="social-btn footer-social-btn" 
                             src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5590_twitter-icon_black.svg"
                             imgClass="footer-social-img"/>
                <SocialImage href="mailto:contact@webflow.com"
                             aCSS="social-btn footer-social-btn" 
                             src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f558e_email-icon-black.svg"
                             imgClass="footer-social-img"/>
            </div>
        </div>
    );
  }
}

export default Footer;