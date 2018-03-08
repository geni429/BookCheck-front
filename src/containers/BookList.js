import React, { Component } from 'react';
import BookCard from '../components/BookCard';
import { browserHistory } from 'react-router';
import axios from 'axios';
import '../css/BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    }

    this.BookDetail=this.BookDetail.bind(this)
    this.bookCardRender=this.bookCardRender.bind(this)
  }

  componentDidMount() {
    let libraryID = 'test';
    //let JWTtoken = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Im1za2FuZzExNiIsIm5iZiI6MTUxNDI3Njc3NSwiaWF0IjoxNTE0Mjc2Nzc1LCJqdGkiOiJiZmI1YmYxYy04MDg4LTQ0NTItYTRiMy0xNzZjZDY4YzQ5NGQiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTE0NTM1OTc1LCJmcmVzaCI6ZmFsc2V9.oAToTZ9NSJ6CazrWmk6KIhHQdFnahm09-KXBXOYzLDQ'
    let url = 'http://52.79.134.200:3004/book?library_id=' + libraryID + '&keyword=' + this.props.params.search;

    axios({
      method: 'GET',
      url: url,
    }).then(res => {
      this.setState({
        bookList: res.data
      });
    }).catch(err => {
      console.log(err);
    })
  }

  BookDetail(index) {
    browserHistory.push('/book/detail/'+this.state.bookList[index]);
  }

  bookCardRender() {
    if( !!this.state.bookList ) {
      return <p id="non-search-result" >검색결과가 없습니다</p>
    }else {
      return this.state.bookList.map((ele, index) => {
        return <BookCard title={ele.title} author={ele.author} image={ele.img} key={index} BookDetail={this.BookDetail}/>
      })
    }
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
            {this.bookCardRender()}
          </ul>
        </section>
      </div>
    );
  }
}

export default BookList;