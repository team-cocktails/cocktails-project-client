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
        const incrementedTimes_Drank = times_drank++
        addTimesDrank(drinkId, incrementedTimes_Drank, owner_id, this.props.user.token)

        const detail = this.state.drink;
        const APIDrinkId = getDetailId(detail);
        const SQLDrinkData = await getSQLId(APIDrinkId, this.props.user.token)
        this.setState({ SQL_drink: SQLDrinkData })
    }

    render() {

        console.log( this.state.SQL_drink )

        return (
            <div>
                <h1>Detail Page</h1>
                
                    {this.state.drink.map((drink) =>
                        <div>
                            <p><img src={drink.strDrinkThumb} alt='cocktail' height="100px" width="100px"></img></p>
                            <h2>{drink.strDrink}</h2>

                            <h3>Glass Type</h3>
                            <p>{drink.strGlass}</p>
                            <h3>Instructions</h3>
                            <p>{drink.strInstructions}</p>
                            <h3>Ingredients</h3>
                            <p className="detail-ingredient">{drink.strIngredient1}</p>
                            <p className="detail-measurement">{drink.strMeasure1}</p>
                            <p className="detail-ingredient">{drink.strIngredient2}</p>
                            <p className="detail-measurement">{drink.strMeasure2}</p>
                            <p className="detail-ingredient">{drink.strIngredient3}</p>
                            <p className="detail-measurement">{drink.strMeasure3}</p>
                            <p className="detail-ingredient">{drink.strIngredient4}</p>
                            <p className="detail-measurement">{drink.strMeasure4}</p>
                            <p className="detail-ingredient">{drink.strIngredient5}</p>
                            <p className="detail-measurement">{drink.strMeasure5}</p>
                            <p className="detail-ingredient">{drink.strIngredient6}</p>
                            <p className="detail-measurement">{drink.strMeasure6}</p>
                            <p className="detail-ingredient">{drink.strIngredient7}</p>
                            <p className="detail-measurement">{drink.strMeasure7}</p>
                            <p className="detail-ingredient">{drink.strIngredient8}</p>
                            <p className="detail-measurement">{drink.strMeasure8}</p>
                            <p className="detail-ingredient">{drink.strIngredient9}</p>
                            <p className="detail-measurement">{drink.strMeasure9}</p>
                            <p className="detail-ingredient">{drink.strIngredient10}</p>
                            <p className="detail-measurement">{drink.strMeasure10}</p>
                            <p className="detail-ingredient">{drink.strIngredient11}</p>
                            <p className="detail-measurement">{drink.strMeasure11}</p>
                            <p className="detail-ingredient">{drink.strIngredient12}</p>
                            <p className="detail-measurement">{drink.strMeasure12}</p>
                            <p className="detail-ingredient">{drink.strIngredient13}</p>
                            <p className="detail-measurement">{drink.strMeasure13}</p>
                            <p className="detail-ingredient">{drink.strIngredient14}</p>
                            <p className="detail-measurement">{drink.strMeasure14}</p>
                            <p className="detail-ingredient">{drink.strIngredient15}</p>
                            <p className="detail-measurement">{drink.strMeasure15}</p>
                            <h3>ID Number</h3>
                            <p>{drink.idDrink}</p>
                            <p>{drink.strTags}</p>

                        </div>)}
                        
                        {this.state.SQL_drink.map((drink) =>
                        <div>
                            <p>Times you've drank this: {drink.times_drank} </p>
                            <button onClick={ () => this.handleTimesDrank(drink.times_drank, drink.owner_id, drink.id)}>I drank this!</button>
                        </div>)}
                
                <Link to={`../menu`}><button>Back to Your Menu</button></Link>
            </div>
        )
    }
}
