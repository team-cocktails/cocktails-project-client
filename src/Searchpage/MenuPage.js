import React, { Component } from 'react'
import { getMenu, deleteDrink } from '../components/Utils.js';
import { Link } from 'react-router-dom';

export default class MenuPage extends Component {
    state = {
        drinks: [],
    }

    componentDidMount = async () => {
        const drinks = await getMenu(this.props.user.token);
        this.setState({ drinks })
    }

    handleDelete = async (id) => {
        await deleteDrink(id, this.props.user.token)
        const drinks = await getMenu(this.props.user.token);
        this.setState({ drinks: drinks });
    }

    render() {
        return (
            <div className='menu-parent'>
                <div className='menu-container'>
                    <h1 className='menu-header'>What'll ya have?</h1>
                    <div>
                        <h1>Your Drink Menu...</h1>
                        <div className='menu-item'>
                            {
                                this.state.drinks.map(drink =>

                                    <div className='menu-detail'>
                                        <Link to={`./detail/${drink.id_drink}`}><p><img src={drink.picture} alt='cocktail'></img></p>
                                            <p>{drink.drink_name}</p>

                                        </Link>
                                        {/* nice work remembering to do an anonymous function to get this working */}
                                        <button className="remove-button" onClick={() => this.handleDelete(drink.id)}>Remove</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
