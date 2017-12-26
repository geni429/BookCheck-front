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
    let JWTtoken = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTUxMzc3NTczMiwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTUxNDAzNDkzMiwibmJmIjoxNTEzNzc1NzMyLCJqdGkiOiJhNGVjMzdmZS04NmI0LTRjOWYtYTJhYy0wNzZiYjFmYzU3MzIiLCJpZGVudGl0eSI6Im1za2FuZzExNiJ9.GVSkN31_PXZBqyZH0ACvuhTwqBK1IJh3YphK_7e6TbI';
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