import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import  {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorText: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
        this.setState({errorText: error.message});
      }
    }
    handleChange = event => {
      const {value, name} = event.target;
      this.setState({[name]: value})
    }

    render() {
      return(
        <div className = 'sign-in'>
          <h1>I already have an account</h1>
          <span>Sign in with your e-mail and password</span>
            <form onSubmit = {this.handleSubmit}>
              <FormInput type="email"
                         name = 'email'
                         label = 'e-mail'
                         handleChange = {this.handleChange}
                         value = {this.state.email}
                         required />
              <FormInput type="password"
                         name = 'password'
                         handleChange = {this.handleChange}
                         value = {this.state.password}
                         required
                         label = 'password'/>
              <div className="error">{this.state.errorText}</div>           
              <div className = 'buttons'>          
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                  {' '}
                  Sign in with google {' '}
                </CustomButton>
              </div>    
            </form>
          </div>
        );
    }
}

export default SignIn;
