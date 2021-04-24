import React, { Component } from 'react'
import josie from '../assets/josie.JPEG';
import vance from '../assets/vance.jpeg';
import stephen from '../assets/stephen.png';
import taylor from '../assets/taylor.jpg';


export default class AboutPage extends Component {
    render() {
        return (
            <div className='members-container'>
            
                <h1 className='members-header'>Meet the team at What'll ya have? </h1>
                <div className='members'>
                    {/* might have been nice to have a MembersItem component for reusability, then hold onto this datai n an array to map over */}
                    <div className='members-item'>
                        <img alt='Vance drinking' src={vance} />
                        <div>Software Engineer</div>
                        <div>Favorite Bar: RSL Reno, NV</div>
                        <div>Favorite Cocktail: Dark &#38; Stormy</div>
                    </div>
                    <div className='members-item'>
                        <img alt='josie drinking' src={josie} />
                        <div>Software Engineer</div>
                        <div>Favorite Bar: The Saphire Hotel Portland, OR</div>
                        <div>Favorite Cocktail: French 75</div>
                    </div>
                    <div className='members-item'>
                        <img alt='Stephen drinking' src={stephen} />
                        <div>Software Engineer</div>
                        <div>Favorite Bar: Cat's Paw Saloon Portland, OR</div>
                        <div>Favorite Cocktail: Negroni</div>
                    </div>
                    <div className='members-item'>
                        <img alt='Taylor drinking' src={taylor} />
                        <div>Software Engineer</div>
                        <div>Favorite Bar: Triple Nickel Portland, OR</div>
                        <div>Favorite Cocktail: Moscow Mule</div>
                    </div>
                </div>
            </div>
        )
    }
}
