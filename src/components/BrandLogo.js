import React, {Component} from 'react';
import '../css/Footer.css';
import '../css/HeaderNav.css';

class BrandLogo extends Component{
    render(){
        return (
            <img id={this.props.id} src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f558a_space-logo.svg"/>
        )
    }
}