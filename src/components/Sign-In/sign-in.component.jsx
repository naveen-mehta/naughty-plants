import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './sign-in.component.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import { googSignIn } from '../../firebase/firebase.utils'

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
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Use your email and password to login</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        required
                    />
                    
                    <FormInput 
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        required                    
                    />
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick={googSignIn} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignIn
