import React from "react"
import {FormErrors} from './formerrors'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            zipcode:'',
            userEmail:'',
            userName:'',
            password:'',
            confirmPassword:'',
            formErrors:{userEmail:'',userName:'',password:'',confirmPassword:''},
            emailValid:false,
            userNameValid:false,
            passwordValid:false,
            confirmPasswordValid:false,
            formValid:false

        }

          
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
     
    }
    onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                [name]:value
            },
            ()=>{this.validateField(name, value)}
        );
    
    }
    validateField(fieldName, value){
        let fieldValidationErrors=this.state.formErrors;
        let emailValid=this.state.emailValid;
        let userNameValid=this.state.userNameValid;
        let passwordValid=this.state.passwordValid;
        let confirmPasswordValid=this.state.confirmPasswordValid;
        console.log(fieldName,value)
        if(fieldName==='userEmail'){
            emailValid = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is not valid';
            console.log(fieldValidationErrors);
        }
        else if(fieldName==='userName'){
            userNameValid = value.match(/^([a-zA-Z0-9]{6,15})$/i);
            fieldValidationErrors.username = userNameValid ? '': 'is invalid';
        }

        else if(fieldName=='password'){
            passwordValid=value.length>=6;
            fieldValidationErrors.password=passwordValid? '': 'short password';
        }

        else if(fieldName=='confirmPassword'){
            if(this.state.password && this.state.confirmPassword===this.state.password){
                fieldValidationErrors.confirmPassword='';
            }
            else{
                fieldValidationErrors.confirmPassword='mismatch';

            }
        }

        else{
           return ""; 
        }

        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            userNameValid: userNameValid,
            passwordValid: passwordValid,
            confirmPasswordValid1: confirmPasswordValid
          }, this.validateForm);
}


validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.usernameValid
        && this.state.confirmPasswordValid});
  }



    onSubmit(e){
        e.preventDefault();
       
        console.log(this.state);
        alert("data submitted successfully");
        
    }


    



    
    render() {
      
        return (
            <form onSubmit={this.onSubmit} className="user-form">
               
                <h1>Register</h1>
                <p>join the community and improve the game</p> <p>with <strong>ANGLR</strong></p>
                <div className="field">
                <i className="fa fa-user"></i>
                <input type="text" onChange={this.onChange}  value={this.state.firstName} pattern="[A-Za-z]{3,15}" name="firstName" placeholder="First Name" />
                </div>
            
                <div className="field">
                <i className="fa fa-user"></i>
                <input type="text" onChange={this.onChange}  value={this.state.lastName} pattern="[A-Za-z]{3,15}" name="lastName" placeholder="Last Name" />
                </div>
                <div className="field">
                <i className="fa fa-map-marker"></i>
                <input type="number"  onChange={this.onChange}  value={this.state.zipcode} name="zipcode" pattern="[0-9]{6}" placeholder="Zip Code" />
               </div>
               <div className="field">
               <i className="fa fa-envelope" aria-hidden="true"></i>
               <i className="fa fa-warning" aria-hidden="true"></i>
                <input type="email"  onChange={this.onChange}  value={this.state.userEmail} name="userEmail" placeholder="Email"  />
             
                </div>
                <div className="field">
                <i className="fa fa-user"></i>
                <input type="text" name="userName" onChange={this.onChange}  value={this.state.userName} placeholder="User Name" />
                
                </div>
                <div className="field">
                <i className="fa fa-lock"></i>
                <i className="fa fa-warning" aria-hidden="true"></i>
                <input type="password" onChange={this.onChange}  value={this.state.password} name="password" placeholder="Password" />
               
                </div>
                <div className="field">
                <i className="fa fa-lock"></i>
                <input type="password" onChange={this.onChange}  value={this.state.confirmPassword} name="confirmPassword" placeholder="Confirm password" />
                </div>
               <section>
                   <article>By Registering you agree to</article>
                   <article> ours <strong>Term</strong> and <strong> privacy policy</strong></article>
                   </section>
                   <div className="error">
                    <FormErrors formErrors={this.state.formErrors} />
                    {/* {Object.keys(this.state.formErrors).map((fieldName, i) => {
                    if(this.state.formErrors[fieldName].length > 0){
                        console.log(this.state.FormErrors)
                               
                    }else{
                    }
                    })} */}
                    </div>
                   <div className="field">
                <button type="submit">Register</button>
                </div>
        
            </form>
        );
    }
}

export default SignupForm;