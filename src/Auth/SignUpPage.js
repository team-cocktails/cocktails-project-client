import React, { Component } from 'react'
import { signUpUser } from '../components/Utils.js';

export default class SignUpPage extends Component {

    state = {
        email: '',
        password: '',    
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value});

    handlePasswordChange = (e) => this.setState({ password: e.target.value});

    handleSubmit = async e => {
        e.preventDefault()
    
        try {
            const user = await signUpUser(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');

        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
    }
    
    render() {
        return (
            <div>
                <h2>SIGNUP</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password
                            <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

