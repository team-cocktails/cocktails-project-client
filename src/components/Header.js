import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul className='header-links'>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/search">Search</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/login">Sign In</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/signup">Sign Up</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/menu">Your Menu</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/about">About us Page</NavLink></li>
                    {/* <li><button onClick={this.props.handleLogout}>Sign Out</button></li> */}
                </ul>
                
            </div>
        )
    }
}