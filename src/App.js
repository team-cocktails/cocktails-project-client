import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  PrivateRoute,
} from 'react-router-dom';
import './App.css';
import HomePage from './Homepage/HomePage.js';
import DetailPage from './Searchpage/DetailPage.js';
import SignUpPage from './Auth/SignUpPage.js';
import LoginPage from './Auth/LoginPage.js';
import MenuPage from './Searchpage/MenuPage.js';
import AboutPage from './components/AboutPage.js';
import SearchPage from './Searchpage/SearchPage.js';
export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/detail" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                      />
                      <Route 
                        path="/signup" 
                        exact
                        render={(routerProps) => <SignUpPage {...routerProps} />} 
                      />
                      <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LoginPage {...routerProps} />} 
                      />
                      <PrivateRoute 
                            path="/menu" 
                            exact
                            token={this.state.user && this.state.user.token}
                            render={(routerProps) => 
                              <MenuPage 
                                user={this.state.user}
                                {...routerProps} 
                              />} 
                        />
                      <Route 
                          path="/about" 
                          exact
                          render={(routerProps) => <AboutPage {...routerProps} />} 
                      />
                      <Route 
                          path="/search" 
                          exact
                          render={(routerProps) => <SearchPage {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}

