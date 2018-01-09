import React from 'react';

const BookCard = ({ image, title, author, index }) => {
  return (
    <li className='bookcard'>
      <img className='book-image' alt={title} src={image}/>
      <div className='book-info'>
        <h1 className='book-title' onClick={this.props.BookDetail(index)}>{title}</h1>
        <h2 className='book-author'>{author}</h2>
      </div>
    </li>
  );
}

export default BookCard;