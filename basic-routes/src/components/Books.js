import React, { Component } from 'react';
import book from '../books';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOfBooks: [...book.books],
      searchStr: '',
    };
  }

  handleBookFilter = (event) => {
    let value = event.target.value;

    if (value === '') {
      this.setState({
        searchStr: '',
        arrOfBooks: [...book.books],
      });
    } else {
      let updatedArray = this.state.arrOfBooks.filter((book) => {
        if (book.title.toLowerCase().includes(value)) {
          return true;
        } else {
          return false;
        }
      });

      this.setState({ searchStr: value, arrOfBooks: updatedArray });
    }
  };

  render() {
    // console.log(book.books);
    return (
      <section className='books-sec'>
        <input
          type='text'
          name='booksSearch'
          id='booksSearch'
          placeholder='Search Book here'
          onChange={(event) => {
            this.handleBookFilter(event);
          }}
        />

        <ul className='person-card-div'>
          {this.state.arrOfBooks.map((book, i) => {
            return (
              <li key={i}>
                <article className='book-card'>
                  <div className='book-card__img-div'>
                    <img src={book.image} alt='imgCard' />
                  </div>
                  <h2>{book.title}</h2>
                  <h4>Author:- {book.author}</h4>
                  <a href={book.website}>Learn More!</a>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Books;
