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
                this.setState({ error: e.response.body.error})
            }
         
    }
    
    render() {
        return (
            <div className='signup-parent'>
            <div className='signup-container'>
            <h1 className='signup-header'>What'll ya have?</h1>
            <h1>Sign up to get the best drinks...</h1>
                {
                    this.state.error && <h3 style={{ color: 'red'}}>{this.state.error}</h3>
                    
                }
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <label>
                        <p>Your Email</p>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        <p>Your Password</p>
                            <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button className='signup-button'>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

