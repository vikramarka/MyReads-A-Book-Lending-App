import React, {Component} from 'react';
import Header from './components/Header';
import Shelf from './components/Shelf';
import {Link} from 'react-router-dom';

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
            <Shelf loaded={this.props.loaded} categories={shelfCategories} title={shelfCategory.title} key={shelfCategory.title} onChangeBookShelf={this.props.onChangeBookShelf} books={this.getBooksForShelf(books,shelfCategory.key)}/>
          ))
        }
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    )
  }

}

export default MyReads;
