import React,{Component} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    handleChange=(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div className='sign-up'>
            <h2>I already have an account</h2>
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
                        <CustomButton type='submit'> Sign Up </CustomButton>
             </form>
        </div>
        )
    }
    
}
export default SignUp; 