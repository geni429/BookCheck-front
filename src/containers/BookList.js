import React, { Component } from 'react';
import { HeaderNav, Footer } from '../components';
import '../css/BookList.css';

class BookList extends Component {
  render() {
    return (
      <div id='booklist'>
        <HeaderNav />
        <section>
          <article id='search-result-header'>
            <div>[BookName] 검색결과</div>
            <div>요청하신 도서의 검색 결과입니다.</div>
          </article>
          <div id='search-result-wrapper'>
            <article></article>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BookList;