import React from "react"
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

        }

          

      
          

        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
     
    }
    onChange(e){
      
        this.setState({[e.target.name]:e.target.value});

        
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
                <input type="text" onChange={this.onChange}  value={this.state.firstName} name="firstName" placeholder="First Name" />
                </div>
            
                <div className="field">
                <i className="fa fa-user"></i>
                <input type="text" onChange={this.onChange}  value={this.state.lastName} name="lastName" placeholder="Last Name" />
                </div>
                <div className="field">
                <i className="fa fa-map-marker"></i>
                <input type="number"  onChange={this.onChange}  value={this.state.zipcode} name="zipcode" placeholder="Zip Code" />
               </div>
               <div className="field">
               <i className="fa fa-envelope" aria-hidden="true"></i>
                <input type="email"  onChange={this.onChange}  value={this.state.userEmail} name="userEmail" placeholder="Email"  />
                </div>
                <div className="field">
                <i className="fa fa-user"></i>
                <input type="text" name="userName" onChange={this.onChange}  value={this.state.userName} placeholder="User Name" />
                </div>
                <div className="field">
                <i className="fa fa-lock"></i>
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
                 
                   <div className="field">
                <button type="submit">Register</button>
                </div>
        
            </form>
        );
    }
}

export default SignupForm;