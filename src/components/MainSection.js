import React, {Component} from 'react';
import SearchBook from './SearchBook';
import ServiceIntro from './ServiceIntro';

class MainSection extends Component{
  render(){
    return(
      <div>
        <SearchBook inputSearchContent={this.props.inputSearchContent} search={this.props.search} />
        <ServiceIntro />
      </div>
    )
  }
}

export default MainSection;