import React,{Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.setState({email:'', password:''})
    }
    handleChange=(e)=>{
        const {name, value} = e.target
       this.setState({
           [name]:value
       })
    }
    render(){
        console.log(this.state.email)
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type='email'
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    />

                    <FormInput
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    />
                    <div className="buttons">
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;