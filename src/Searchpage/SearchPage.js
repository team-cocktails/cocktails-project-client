
import React, { Component } from 'react'
import favoriteMarker from '../assets/favorite-marker.png';
import { getSearchDrinks, getIngredientDrinks, addToMenu, getRandomDrinks, getMenu } from '../components/Utils.js';


export default class SearchPage extends Component {
    state = {
        search: '',
        filter: '',
        drinks: [],
        menu: [],
    }
   
    componentDidMount = async () => {
        if (this.props.user.token) await this.fetchMenu();
    }

    fetchMenu = async () => {
        const menu = await getMenu(this.props.user.token)

        this.setState({ menu })
    }

    handleDrinkChange = (e) => {
        this.setState({ search: e.target.value })
    }
    handleIngredientChange = (e) => {
        this.setState({ filter: e.target.value })
    }
    handleRandom = async () => {
        const drinkRandom = await getRandomDrinks(this.props.user.token)
        this.setState({ drinks: drinkRandom.drinks })
    }

    handleDrinkSubmit = async (e) => {
        e.preventDefault();
        const drinkResults = await getSearchDrinks(this.state.search, this.props.user.token)
        this.setState({ drinks: drinkResults.drinks });
        this.setState({ search: '' })
        this.setState({ filter: '' })
    }
    handleIngredientSubmit = async (e) => {
        e.preventDefault();
        const ingredientResults = await getIngredientDrinks(this.state.filter, this.props.user.token)
        this.setState({ drinks: ingredientResults.drinks }); 
        this.setState({ search: '' })
        this.setState({ filter: '' })
    }
    handleMenuClick = async (drink) => {
        await addToMenu({
            picture: drink.strDrinkThumb,
            drink_name: drink.strDrink,
            category: drink.strTags,
            id_drink: drink.idDrink,
        }, this.props.user.token)
        await this.fetchMenu();
    }


    ifMenu = (drink) => {
      
        const menu = this.state.menu.find(item =>
            item.id_drink === Number(drink.idDrink))
            
            return Boolean(menu)
        }

    render() {
            
        return (
        <div className='search-parent'>
            <div className='search-container'>

                <h1 className='search-header'>What'll ya have?</h1>
                <div>
                    <h1>You can search by drink...</h1>
                    <form onSubmit={this.handleDrinkSubmit}>

                        <label>
                            <input value={this.state.search} onChange={this.handleDrinkChange} />
                        </label>
                        <button className='drink-button'>Drink this!</button>
                    </form>
                    <h1>OR you can search by ingredient...</h1>
                    <form onSubmit={this.handleIngredientSubmit}>
                        <label>
                            <input value={this.state.filter} onChange={this.handleIngredientChange} />
                        </label>
                        <button className='ingredient-button'>Drink this!</button>
                    </form>
                    <h1>OR you can roll the dice and pick a random drink...</h1>
                    <button className='random-button' onClick={this.handleRandom}>Drink this!</button>
                </div>
                
                <div className='search-items-container'>
                    {this.state.drinks === null || this.state.drinks === 'None Found'
                    ? <p>Oops! No results found, please check your spelling.</p> 
                    : 

                    <div className='search-item'>  
                        {this.state.drinks.map((drink) =>
                            <div className='search-detail' key={`${drink.idDrink}`}>
                                <p><img src={drink.strDrinkThumb} alt='cocktail' /></p>
                                <p>{drink.strDrink}</p>
                                <p>{drink.strTags}</p>
                                 <p>{drink.id}</p>
                                    <div className='search-favorite'>{
                                    this.ifMenu(drink) 
                                        ? <p><img alt='menu marker' src={favoriteMarker}/>Already a menu item</p>
                                        : <button onClick={() => this.handleMenuClick(drink)}>Add to Your Menu</button>}
                                    </div>
                            </div>
                        )}
                        </div>
                    }

                </div>
            </div>
        </div>
        )
    }
}
