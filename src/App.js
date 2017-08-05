import React, { Component } from 'react';
import MyReads from './MyReads';
import BookSearch from './BookSearch';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {

  state = {
    books: [],
    loaded:false
  }

  shelfCategories = [
    {
      title:"Currently Reading",
      key:"currentlyReading"
    },
    {
      title:"Want to Read",
      key:"wantToRead"
    },
    {
      title:"Read",
      key:"read"
    }
  ]

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books,loaded:true});
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=>(
          <MyReads loaded={this.state.loaded} books={this.state.books} shelfCategories={this.shelfCategories} onChangeBookShelf={(book,shelf)=>{this.onChangeBookShelf(book,shelf)}}/>
        )}/>
        <Route exact path="/search" render={()=>(
          <BookSearch categories={this.shelfCategories} books={this.state.books} onChangeBookShelf={(book,shelf)=>{this.onChangeBookShelf(book,shelf)}}/>
        )}/>
      </div>
    );
  }
  onChangeBookShelf(book,shelf){
    BooksAPI.update(book,shelf);
    this.setState((state)=>{
      let newBook = true;
      state.books.map((stbook)=>{
        if(stbook.id===book.id){
          newBook = false;
          stbook.shelf = shelf;
          return 0;
        }
        return 0;
      });
      if(newBook){
        book.shelf = shelf;
        state.books.push(book);
      }
    })
  }
}

export default App;
