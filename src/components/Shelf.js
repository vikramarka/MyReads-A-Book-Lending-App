import React, {Component} from 'react';
import Book from './Book';

class Shelf extends Component{
  render(){
    const books = this.props.books;
    return(
      <div className="bookshelf">
        <div className="bookshelf-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>(
              <li key={book.id}>
                <Book book={book} categories={this.props.categories} onChange={this.props.onChangeBookShelf}/>
              </li>
          ))}
        </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
