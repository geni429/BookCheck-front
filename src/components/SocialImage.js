import React, {Component} from 'react';
import '../css/Footer.css';
import '../css/HeaderNav.css';

class SocailImage extends Component{
  render(){
    return (
      <a href={this.props.href} className={this.props.aCSS}>
        <img src={this.props.src} className={this.props.imgCSS}/>
      </a>
    )
  }
}

export default SocailImage;