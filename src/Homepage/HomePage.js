import React, { Component } from 'react'

import bar from '../assets/bar.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-container'>
                {/* <div className='header-words'>What'll ya have?</div> */}
                <div><img className='home' src={bar} alt={'pictures'} /></div>
                <div className='home-words'>Are you over 21?</div>
                
            </div>
        )
    }
}
