import React, {Component} from 'react';
import SearchBook from './SearchBook';
import ServiceIntro from './ServiceIntro';

class MainSection extends Component{
  render(){
    return(
      <div>
        <SearchBook/>
        <ServiceIntro/>
      </div>
    )
  }
}

export default MainSection;