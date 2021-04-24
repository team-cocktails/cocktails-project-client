import React, { Component } from 'react'
import { addTimesDrank, getDetailId, getDrinkId, getSQLId } from '../components/Utils.js';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
    state = {
        id: '',
        drink: [],
        SQL_drink: [],
    }

    componentDidMount = async () => {
        const drinkData = await getDrinkId(this.props.match.params.id, this.props.user.token);
        this.setState({ drink: drinkData.drinks })
        const detail = this.state.drink;
        const APIDrinkId = getDetailId(detail);
        const SQLDrinkData = await getSQLId(APIDrinkId, this.props.user.token)
        this.setState({ SQL_drink: SQLDrinkData })
    }

    handleTimesDrank = async (times_drank, owner_id, drinkId) => {
        // would like to avoid mutation here, even though it's a small thing
        const incrementedTimes_Drank = times_drank + 1
        addTimesDrank(drinkId, incrementedTimes_Drank, owner_id, this.props.user.token)
        const detail = this.state.drink;
        const APIDrinkId = getDetailId(detail);
        const SQLDrinkData = await getSQLId(APIDrinkId, this.props.user.token)
        this.setState({ SQL_drink: SQLDrinkData })
    }

    render() {

        console.log(this.state.SQL_drink)

        return (
            <div className='detail-parent'>
                <div className='detail-container'>
                    <h1 className='detail-header'>What'll ya have?</h1>
                    <h1>How to make this drink...</h1>
                    {this.state.drink.map((drink) =>
                        <div className='detail-item'>
                            <div className='detail-detail'>
                                <div><img src={drink.strDrinkThumb} alt='cocktail' /></div>
                                <h2>{drink.strDrink}</h2>
                                <h4>Glass Type: {drink.strGlass}</h4>
                                <h4>Instructions:</h4>{drink.strInstructions}
                                <div><h4>Ingredients:</h4></div>
                                <div>{drink.strIngredient1} {drink.strMeasure1}</div>
                                <div>{drink.strIngredient2} {drink.strMeasure2}</div>
                                <div>{drink.strIngredient3} {drink.strMeasure3}</div>
                                <div>{drink.strIngredient4} {drink.strMeasure4}</div>
                                <div>{drink.strIngredient5} {drink.strMeasure5}</div>
                                <div>{drink.strIngredient6} {drink.strMeasure6}</div>
                                <div>{drink.strIngredient7} {drink.strMeasure7}</div>
                                <div>{drink.strIngredient8} {drink.strMeasure8}</div>
                                <div>{drink.strIngredient9} {drink.strMeasure9}</div>
                                <div>{drink.strIngredient10} {drink.strMeasure10}</div>
                                <div>{drink.strIngredient11} {drink.strMeasure11}</div>
                                <div>{drink.strIngredient12} {drink.strMeasure12}</div>
                                <div>{drink.strIngredient13} {drink.strMeasure13}</div>
                                <div>{drink.strIngredient14} {drink.strMeasure14}</div>
                                <div>{drink.strIngredient15} {drink.strMeasure15}</div>
                                
                            </div>
                        </div>)}
                    <div>
                        {this.state.SQL_drink.map((drink) =>
                            <div className='detail-times-drank'>
                                <p>Times you've drank this: {drink.times_drank} </p>
                                <button className='times-drank-button' onClick={() => this.handleTimesDrank(drink.times_drank, drink.owner_id, drink.id)}>I drank this!</button>
                            </div>)}
                        <div className='detail-times-drank'>
                            {/* this works with the relative path? interesting! */}
                            <Link to={`../menu`}><button className='times-drank-button'>Back to Your Menu</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
