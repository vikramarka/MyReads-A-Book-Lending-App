import React, {Component} from 'react';
import Header from './components/Header';
import Shelf from './components/Shelf';

class MyReads extends Component{
  getBooksForShelf(books,name){
    return books.filter((book)=>book.shelf===name);
  }
  render(){
    const books = this.props.books;
    const shelfCategories = this.props.shelfCategories;
    return(
      <div>
        <Header />
        {
          shelfCategories.map((shelfCategory)=>(
            <Shelf categories={shelfCategories} title={shelfCategory.title} key={shelfCategory.title} onChangeBookShelf={this.props.onChangeBookShelf} books={this.getBooksForShelf(books,shelfCategory.key)}/>
          ))
        }
      </div>
    )
  }

}

export default MyReads;
