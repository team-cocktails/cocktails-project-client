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
            <div>
                {
                    this.state.drinks.map(drink =>
                        <Link to={`./detail/${drink.id_drink}`}>
                            <div>
                                <p><img src={drink.picture} alt='cocktail'></img></p>
                                <p>{drink.drink_name}</p>
                                <p>{drink.category}</p>
                                <button onClick={() => this.handleDelete(drink.id)}>Remove</button>
                            </div>

                        </Link>
                    )

                }
            </div>
        )
    }
}
