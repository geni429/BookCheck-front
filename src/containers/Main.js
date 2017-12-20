import React, {Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';

class Main extends Component{
  render(){
    return (
      <div>
        <HeaderNav/>
          <section>
            <MainSection/>
          </section>
        <Footer/>
      </div> 
    )
  }
}

export default Main;