import React, { Component } from 'react';
import { HeaderNav, Footer } from '../components';
import { browserHistory } from 'react-router';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 0
    }
  }

  render() {
    console.log(this.state.test);
    console.log(this.props.children);
    return (
      <div>
        <HeaderNav goMain={() => browserHistory.push('/')} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;