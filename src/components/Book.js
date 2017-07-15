import React, {Component} from "react";

class Book extends Component{
  render(){
    const book = this.props.book;
    return (
      <div className="book">
        <img src={book.imageLinks.thumbnail} />
      {book.title}</div>
    )
  }
}
export default Book
