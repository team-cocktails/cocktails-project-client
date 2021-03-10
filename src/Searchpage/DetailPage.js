import React, { Component } from 'react'
import { getDrinkId } from '../components/Utils.js';

export default class DetailPage extends Component {
    state = {
        id: '',
        drink: [],
    }

    componentDidMount = async () => {
        const drink = await getDrinkId(this.props.match.params.id, this.props.user.token);

        this.setState({ drink })
    }
    render() {
        console.log(this.props);
        console.log(this.state.id);
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>Detail Page</h1>
            </div>
        )
    }
}
