import React, { Component } from 'react'
import josie from '../assets/josie.JPEG';
import bar from '../assets/bar.jpg';

export default class AboutPage extends Component {
    render() {
        return (
            <>
            <h1>About us page</h1>
            <img src={bar} />
            <div className='members'>
                
                <div><img alt='josie dark bar' src={josie} /></div>
                <div><img alt='josie dark bar' src={josie} /></div>
                <div><img alt='josie dark bar' src={josie} /></div>
                <div><img alt='josie dark bar' src={josie} /></div>
                
                
            </div>
            </>
        )
    }
}
