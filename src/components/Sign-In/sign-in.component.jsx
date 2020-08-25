import React from 'react'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} = event.target

        this.setState({[name]:value})
    }

    render() {
        return (
            <div>
                <h2>I have an account</h2>
                <span>Use your email and password to login</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input 
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                    />

                    <label>Password</label>
                    <input 
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        required                    
                    />

                    <input type="submit" value="Submit Form" />
                </form>

            </div>
        )
    }
}
export default SignIn
