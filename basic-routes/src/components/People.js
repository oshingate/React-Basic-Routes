import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import got from '../got';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfPeopeles: [...got.houses].reduce((acc, cv) => {
        acc = acc.concat(cv.people);
        return acc;
      }, []),
      searchStr: '',
    };
  }

  handlePeopleFilter = (event) => {
    let value = event.target.value;

    if (value === '') {
      this.setState({
        searchStr: '',
        arrayOfPeopeles: [...got.houses].reduce((acc, cv) => {
          acc = acc.concat(cv.people);
          return acc;
        }, []),
      });
    } else {
      console.log(value);
      let updatedArray = this.state.arrayOfPeopeles.filter((person) => {
        if (person.name.toLowerCase().includes(value)) {
          return true;
        } else {
          return false;
        }
      });

      this.setState({ searchStr: value, arrayOfPeopeles: updatedArray });
    }
  };

  render() {
    console.log(this.state.arrayOfPeopeles);
    return (
      <section className='people-sec'>
        <input
          type='text'
          name='peopeleSearch'
          id='peopeleSearch'
          placeholder='Search People here'
          onChange={(event) => {
            this.handlePeopleFilter(event);
          }}
        />

        <ul className='person-card-div'>
          {this.state.arrayOfPeopeles.map((person, i) => {
            return (
              <li key={i}>
                <article className='person-card'>
                  <div className='person-card__img-div'>
                    <img src={person.image} alt='imgCard' />
                    <span>{person.name}</span>
                  </div>
                  <h3>{person.description}</h3>
                  <a href={person.wikiLink}>Learn More!</a>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default People;
