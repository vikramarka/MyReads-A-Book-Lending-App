import React, {Component} from "react";


class Book extends Component{
  
  render(){
    const book = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <img className="book-cover" src={book.imageLinks.thumbnail} alt="Book"/>
          <div className="book-shelf-changer">
            <select onChange={(e)=>{this.changeHandler(e)}} value={book.shelf}>
              {this.props.categories.map((option)=>(
                <option value={option.key} key={option.key}>{option.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title"><strong>{book.title}</strong></div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    )
  }
  changeHandler(e){
    this.props.onChange(this.props.book,e.target.value);
  }
}
export default Book
