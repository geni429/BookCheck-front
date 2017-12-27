import React, {Component} from 'react';
import '../css/BookDetail.css';

class BookDetail extends Component{
  constructor(props) {
    super(props);

    this.state={
      book : {}
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      book: this.props.params.book
    });
  }
  
  render(){
    return(
      <div>
        
      </div>
    )
  }
}

export default BookDetail;