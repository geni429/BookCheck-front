import React from 'react';

const BookCard = ({ image, title, author }) => {
  return (
    <li className='bookcard'>
      <img className='book-image' alt={title} src={image}/>
      <div className='book-info'>
        <h1 classsName='book-title'>{title}</h1>
        <h2 className='book-author'>{author}</h2>
      </div>
    </li>
  );
}

export default BookCard;