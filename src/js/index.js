import React from 'react'
import ReactDOM from 'react-dom'
import SignupForm from './signupcomponent'
import  '../css/style.css'

/*class App extends React.Component {
    render() {
      return (
        <div>
            <SignupForm/>
        </div>
      );
    }
  }*/
ReactDOM.render( <SignupForm/>, document.getElementById("root"));

