import React, { Component } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul className='header-links'>

                    <li><NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" className="nav-link" to="/search">Search Cocktails</NavLink></li>
                    <li><NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink></li>

                    {
                        (!this.props.user || !this.props.user.token) &&
                        <>
                            <li><NavLink exact activeClassName="active" className="nav-link" to="/login">Log In</NavLink></li>
                            <li><NavLink exact activeClassName="active" className="nav-link" to="/signup">Sign Up</NavLink></li>
                        </>
                    }

                    {
                        this.props.user && this.props.user.token &&
                        <>
                            <li><NavLink exact activeClassName="active" className="nav-link" to="/menu">Your Menu</NavLink></li>
                            <li><NavLink onClick={this.props.handleLogout} exact activeClassName="active" className="nav-link" to="/">Sign Out</NavLink></li>
                        </>
                    }

                </ul>

            </div>
        )
    }
}