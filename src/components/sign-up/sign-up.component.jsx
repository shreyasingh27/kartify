import React,{Component} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async (e)=>{
        e.preventDefault();
        const{displayName,email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            console.log(error);
        }
    }
    handleChange=async (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        const{displayName,email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
            <h2>I do not have a account</h2>
             <span>Sign up with your email and password</span>
             <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName' 
                        value={displayName} 
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                        />
                        <FormInput
                        type='email'
                        name='email' 
                        value={email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required
                        />
    
                        <FormInput
                        type='password' 
                        name='password' 
                        value={password} 
                        handleChange={this.handleChange}
                        label='Password'
                        />
                        <FormInput
                        type='password' 
                        name='confirmPassword' 
                        value={confirmPassword} 
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        />
                        <CustomButton type='submit'> Sign Up </CustomButton>
             </form>
        </div>
        )
    }
    
}
export default SignUp; 