import React, {Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import { browserHistory } from 'react-router';

class Main extends Component{
  constructor(props) {
    super(props);

    this.state = {
      searchContent: ''
    }
    
    this.search = this.search.bind(this);
    this.inputSearchContent = this.inputSearchContent.bind(this);
  }

  inputSearchContent(e) {
    this.setState({
      searchContent: e.target.value
    });
  }

  search() {
    let searchContent = this.state.searchContent;
    browserHistory.push('/book/list/' + searchContent);
  }

  render(){
    return (
      <div>
        <section>
          <MainSection inputSearchContent={this.inputSearchContent} search={this.search} />
        </section>
      </div> 
    )
  }
}

export default Main;