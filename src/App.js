import React, { Component } from 'react';
import MyReads from './MyReads';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books});
    });
  }

  render() {
    return (
      <div className="App">
        <MyReads books={this.state.books}/>
      </div>
    );
  }
}

export default App;
