import React, { Component } from 'react'
import HomeButtons from '../components/HomeButtons.js';
import bar from '../assets/bar.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <div className='home-header'>What'll Ya Have?</div>
                <div className='home-container'>
                    <img className='home-img' src={bar} alt={'pictures'} />
                    <div className='home-words'>First things first, are you over 21?
                    <HomeButtons /></div>
                </div>
            </>
        )
    }
}
