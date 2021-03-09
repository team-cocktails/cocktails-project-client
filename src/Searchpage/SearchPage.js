import React, { Component } from 'react'

export default class SearchPage extends Component {
    state = {
        search: '',
        filter: '',
        drinks: [],
        menu: [],
    }
    handleDrinkChange = (e) => {
        this.setState({search: e.target.value})
    }
    handleIngredientChange = (e) => {
        this.setState({filter: e.target.value})
    }
    handleRandom = (e) => {
        this.setState({filter: e.target.value})
    }

    handleDrinkSubmit = async (e) => {
        e.preventDefault();
        const drinkResults = await getSearchDrinks(this.state.search, this.props.user.token)
        this.setState({search: drinkResults});
    }
    handleIngredientSubmit = async (e) => {
        e.preventDefault();
        const ingredientResults = await getIngredientDrinks(this.state.filter, this.props.user.token)
        this.setState({filter: ingredientResults});
    }
    handleMenuClick = async (drink) => {
        await addToMenu({
            
        })
    }
    ifMenu = (drink) => {
        const onMenu = this.state.menu.find(item =>
            item.id === drink.id);
            return Boolean(onMenu);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleDrinkSubmit}>
                    <label>
                        <input value={this.state.search} onChange={this.handleDrinkChange} />
                    </label>
                    <button>drink</button>
                </form>
                {this.state.drinks.map((drink) =>
                <div>
                    <p>{drink.strDrinkThumb}</p>
                    <p>{drink.strDrink}</p>
                    <p>{drink.strTags}</p>
                    <p>{drink.strCategory}</p>
                    <p>{drink.id}</p>
                    <p>{this.ifMenu(drink) 
                    ? 'XXX'
                    : <button onClick={() => this.handleMenuClick(drink)}>Add to Your Menu</button>}</p>
                </div>)}

                <form onSubmit={this.handleIngredientSubmit}>
                    <label>
                        <input value={this.state.filter} onChange={this.handleIngredientChange} />
                    </label>
                    <button>ingredient</button>
                </form>
                <button onClick={this.handleRandom}>Random!</button>
            </div>
        )
    }
}
