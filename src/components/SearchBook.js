import React, {Component} from 'react';
import '../css/SearchBook.css';

class SearchBook extends Component{
  constructor(props){
    super(props);

    this.state={
      keyword:''
    }

    this.search=this.search.bind(this);
    this.setKeyword=this.setKeyword.bind(this);
  }
  render(){
    return (
      <div id="search-wrapper">
        <div className="search-box" id="search-box">
          <input className="search-box-text" id="search-box-input" type="text" placeholder="도서명 검색" onChange={this.setKeyword}/>
          <input className="search-box-text" id="search-box-btn" type="submit" value="검색하기" onClick={this.search}/>
        </div>
      </div>
    )
  }
  search(){
    console.log(this.state.keyword);
  }

  setKeyword(event){
    let {value}=event.target;
    this.setState({
      ...this.state,
      keyword:value
    });
  }
}

export default SearchBook;