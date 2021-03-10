import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './Homepage/HomePage.js';
import DetailPage from './Searchpage/DetailPage.js';
import SignUpPage from './Auth/SignUpPage.js';
import LoginPage from './Auth/LoginPage.js';
import MenuPage from './Searchpage/MenuPage.js';
import AboutPage from './components/AboutPage.js';
import SearchPage from './Searchpage/SearchPage.js';
import PrivateRoute from './components/PrivateRoute.js';
import Header from './components/Header.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './components/LocalUtils.js';


export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => {
    this.setState({ user });

    putUserInLocalStorage(user);
  }

  //  handleLogout = () => {
  //   this.handleUserChange()
  //  }


  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
        <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
        <Header
            user={this.state.user}
          //  handleLogout={this.handleLogout} 
          />
          <Switch>
            <Route
              path="/detail/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} user={this.state.user} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute
              path="/menu"
              exact
              token={user && user.token}
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
              render={(routerProps) => <SearchPage {...routerProps} user={this.state.user} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

