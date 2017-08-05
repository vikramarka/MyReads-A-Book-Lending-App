import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './components/Book';

class BookSearch extends Component{
  timeoutID = null;
  state = {
      query:"",
      books:[]
  }
  getBooks(query){
      if(this.timeoutID){
          clearTimeout(this.timeoutID);
          this.timeoutID = null;
      }
      this.timeoutID = setTimeout(()=>{
        BooksAPI.search(query)
        .then((books)=>{
             if(!books.error){
                this.props.books.map((book1)=>{
                    books.map((book2)=>{
                        if(book1.id === book2.id){
                            book2.shelf = book1.shelf;
                        }
                    });
                });
                this.setState({books:books});
            }
            else{
                this.setState({books:[]});
            }
        })
      },500);
  }
  updateQuery(queryString){
      const q = queryString;
      this.setState({query:q});
      if(q!==""){
           this.getBooks(q);
      }
  }
  onChangeBookShelf(book,shelf){
      this.setState((state)=>{
        state.books.map((mBook)=>{
            if(mBook.id === book.id){
                mBook.shelf = shelf;
            }
        })
      });
      this.props.onChangeBookShelf(book,shelf);
  }
  render(){
    const {query} = this.state;
    return(
      <div>
        <div className="search-books-bar">
            <Link to="/" className="close-search" />
            <div className="search-books-input-wrapper">
                <input type="text" value={query} onChange={(event)=>this.updateQuery(event.target.value)}/>
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
            {this.state.books.map((book)=>(
                <li key={book.id}>
                    <Book book={book} categories={this.props.categories} onChange={(book,shelf)=>this.onChangeBookShelf(book,shelf)}/>
                </li>
            ))}
            </ol>
        </div>
      </div>
    )
  }

}

export default BookSearch;

