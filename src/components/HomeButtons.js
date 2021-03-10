import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeButtons extends Component {
    

    render() {
        return (
            <div>
                <Link to={`./signup`}><button className='yes-button'>Yes</button></Link>
                <a href='https://www.google.com'><button className='no-button'>No</button></a>
            </div>
        )
    }
}
