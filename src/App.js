import React, { Component } from 'react';
import MyReads from './MyReads';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {

  state = {
    books: []
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
      this.setState({books});
    });
  }

  render() {
    return (
      <div className="App">
        <MyReads books={this.state.books} shelfCategories={this.shelfCategories} onChangeBookShelf={(book,shelf)=>{this.onChangeBookShelf(book,shelf)}}/>
      </div>
    );
  }
  onChangeBookShelf(book,shelf){
    BooksAPI.update(book,shelf);
    this.setState((state)=>{
      state.books.map((stbook)=>{
        if(stbook.id===book.id){
          stbook.shelf = shelf;
          return 0;
        }
        return 0;
      })
    })
  }
}

export default App;
