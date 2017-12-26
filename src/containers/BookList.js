import React, { Component } from 'react';
import { HeaderNav, Footer, BookCard } from '../components';
import { browserHistory } from 'react-router';
import axios from 'axios';
import '../css/BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    }
  }

  componentDidMount() {
    let libraryID = 1234567890;
    let JWTtoken = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Im1za2FuZzExNiIsIm5iZiI6MTUxNDI3Njc3NSwiaWF0IjoxNTE0Mjc2Nzc1LCJqdGkiOiJiZmI1YmYxYy04MDg4LTQ0NTItYTRiMy0xNzZjZDY4YzQ5NGQiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTE0NTM1OTc1LCJmcmVzaCI6ZmFsc2V9.oAToTZ9NSJ6CazrWmk6KIhHQdFnahm09-KXBXOYzLDQ'
    let url = '/book?library_id=' + libraryID + '?keyword=' + this.props.params.search;

    axios({
      method: 'GET',
      url: url,
      headers: {
        'Authorization': JWTtoken
      }
    }).then(res => {
      console.log(res);
      this.setState({
        bookList: res.data
      });
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div id='booklist'>
        <section>
          <article id='search-result-header'>
            <div>[ "{this.props.params.search}" ] 검색결과</div>
            <div>요청하신 도서의 검색 결과입니다.</div>
          </article>
          <ul id='search-result-wrapper'>
            {this.state.bookList.map((ele, index) => {
              return <BookCard title={ele.title} author={ele.author} image={ele.img} key={index} />
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default BookList;