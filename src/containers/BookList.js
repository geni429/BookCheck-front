import React, { Component } from 'react';
import { HeaderNav, Footer, BookCard } from '../components';
import { browserHistory } from 'react-router';
import axios from 'axios';
import '../css/BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [
        {
          "area": 1,
          "author": "케네스 레이즈",
          "borrowable": true,
          "detail": "파이썬을 ‘파이썬답게’ 쓰려면 어떻게 해야 할까? 파이썬스러운 코드라는 게 도대체 어떤 의미일까? 내가 작성한 코드를 파이썬답다고 판단할 수 있는 기준은 무엇일까? 『파이썬을 여행하는 히치하이커를 위한 안내서』는 속 시원하게 답을 찾기 어려운 ‘파이썬다운 프로그램 작성법’을 명료하고 간결하게 정리한 가이드다. 여기에는 초보자는 물론 더 나은 코딩 기술을 고민하는 중급 이상의 파이썬 프로그래머에게 통찰을 주는 내용을 담았다. ",
          "publication_date": "2017-10-31",
          "rfid": "a1a1a1a1a1a1",
          "summary": "거대한 파이썬 세상을 모험하는 프로그래머를 위한 안내서",
          "title": "파이썬을 여행하는 히치하이커를 위한 안내서",
          "img": "http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a48b485c02500012ea5b5_download.png"
        }
      ]
    }
  }

  componentDidMount() {
    let libraryID = 1234567890;
    let JWTtoken = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTUxMzc3NTczMiwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTUxNDAzNDkzMiwibmJmIjoxNTEzNzc1NzMyLCJqdGkiOiJhNGVjMzdmZS04NmI0LTRjOWYtYTJhYy0wNzZiYjFmYzU3MzIiLCJpZGVudGl0eSI6Im1za2FuZzExNiJ9.GVSkN31_PXZBqyZH0ACvuhTwqBK1IJh3YphK_7e6TbI';

    axios.get({
      url: '/book?library_id=' + libraryID + '?keyword=' + this.props.params.search,
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