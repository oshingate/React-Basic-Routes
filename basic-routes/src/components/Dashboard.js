import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Aside from './Aside';
import Home from './Home';
import Main from './Home';
import Articles from './Articles';
import People from './People';
import Books from './Books';
import HelpAndSupport from './HelpAndSupport';
import SingleArticle from './SingleArticle';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div className='flex fw '>
            <Aside />
            <main className='flex-80 main'>
              <div className='main-div'>
                <Route path='/home'>
                  <Home />
                </Route>
                <Route path='/articles' exact>
                  <Articles />
                </Route>
                <Route path='/people'>
                  <People />
                </Route>
                <Route path='/books'>
                  <Books />
                </Route>
                <Route path='/helpAndSupport'>
                  <HelpAndSupport />
                </Route>
                <Route path='/articles/:slug' component={SingleArticle} />
              </div>
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default Dashboard;
