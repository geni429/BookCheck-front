import React, {Component} from 'react';
import '../css/SearchBook.css';

class SearchBook extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="search-wrapper">
        <div className="search-box" id="search-box">
          <input className="search-box-text" id="search-box-input" type="text" placeholder="도서명 검색"/>
          <input className="search-box-text" id="search-box-btn" type="submit" value="검색하기" onClick={this.search()}/>
        </div>
      </div>
    )
  }
  search(){
  }
}

export default SearchBook;