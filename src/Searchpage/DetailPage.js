import React, { Component } from 'react'
import { getDrinkId } from '../components/Utils.js';

export default class DetailPage extends Component {
    state = {
        id: '',
        drink: [],
    }

    componentDidMount = async () => {
        const drink = await getDrinkId(this.params.id, this.props.user.token);

        this.setState({ drink })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
