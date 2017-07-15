import React, {Component} from 'react';
import Header from './components/Header';
import Shelf from './components/Shelf';

class MyReads extends Component{
  getBooksForShelf(books,name){
    return books.filter((book)=>book.shelf===name);
  }
  render(){
    const books = this.props.books;
    return(
      <div>
        <Header />
        <Shelf title="Currently Reading" books={this.getBooksForShelf(books,"currentlyReading")}/>
        <Shelf title="Want to Read" books={this.getBooksForShelf(books,"wantToRead")}/>
        <Shelf title="Read" books={this.getBooksForShelf(books,"read")}/>
      </div>
    )
  }

}

export default MyReads;
