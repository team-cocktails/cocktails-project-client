import React, { Component } from 'react'
import { logInUser } from '../components/Utils.js';

export default class LoginPage extends Component {

    state = {
        email: '',
        password: '',    
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value});

    handlePasswordChange = (e) => this.setState({ password: e.target.value});

    handleSubmit = async e => {
        e.preventDefault()
    
        try {
            const user = await logInUser(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/menu');

        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
    }
    
    render() {
        return (
            <div className='signin-parent'>
            <div className='signin-container'>
            <h1 className='signin-header'>What'll ya have?</h1>
            <h1>Sign in to get your drink menu for the night...</h1>
                <form className='signin-form' onSubmit={this.handleSubmit}>
                    <label>
                        <p>Email</p>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        <p>Password</p>
                            <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button className='signin-button'>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}
