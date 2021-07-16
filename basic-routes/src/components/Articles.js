import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { articles } from '../data.json';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      arrayOfArticles: [...articles],
    };
  }

  handleArticleFilter = (event) => {
    let value = event.target.value;

    if (value === '') {
      this.setState({
        searchStr: '',
        arrayOfArticles: [...articles],
      });
    } else {
      let updatedArray = this.state.arrayOfArticles.filter((article) => {
        if (article.title.toLowerCase().includes(value)) {
          return true;
        } else {
          return false;
        }
      });

      this.setState({ searchStr: value, arrayOfArticles: updatedArray });
    }
  };

  render() {
    // console.log(articles);
    return (
      <section className='articles-sec'>
        <input
          type='text'
          name='articleSearch'
          id='articleSearch'
          placeholder='Search article here'
          onChange={(event) => {
            this.handleArticleFilter(event);
          }}
        />

        <ul className='articles-ul'>
          {this.state.arrayOfArticles.map((article, i) => {
            return (
              <li key={i}>
                <NavLink to={`/articles/${article.slug}`}>
                  <h3>{article.title}</h3>
                </NavLink>
                <h5>{article.author}</h5>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Articles;
