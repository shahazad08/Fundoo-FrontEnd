import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {LoginUser} from '../services/userservices'
import { ToastContainer,toast} from "react-toastify";
import {withRouter} from "react-router-dom"
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {
                email: "",
                password: "",
            }
        };
        // this.baseState = this.state
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "min 6 char req" : "";
            break; 
            default:
            break;   
        }
        this.setState({ formErrors, [name]: value }) ;
      };
    
      
      handleSubmit = e => {
        e.preventDefault();
    
      if(this.state.email!==""  || this.state.password!=="")
      {
      var data={
        "email":this.state.email,
        "password":this.state.password
     
      }
      LoginUser(data);
      console.log("*****",data);
      
    }
  
  else{
      toast("Fields are Missing", {
        position: toast.POSITION.TOP_CENTER
      });    
    
    }
  }

RegisterClick=()=>{
  this.props.history.push('register')
}
  
render() {
    const { formErrors } = this.state;
    return (
        <div>
          <div className="fields">
            <TextField style={{
              width:"58%"
            }}
             className={formErrors.email.length > 0 ? "error" : null}
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              noValidate
              margin="normal"
              variant="outlined"
              
            />
            <div>
            {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
  )}
              </div>
          </div>
       
  <div className="fields">
            <TextField style={{
              width:"58%"
            }}
             className={formErrors.password.length > 0 ? "error" : null}
              label="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              noValidate
              margin="normal"
              variant="outlined"       
            />
            <div>
            {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
  )}
              </div>
  
   </div>
  
           <div className="buttons">
          <Button id="signbutton" onClick={this.RegisterClick}>
             Create Account
            </Button>
  
            <Button id="nextbtn" onClick={this.handleSubmit}>
             Next
            </Button>
            </div>
            <ToastContainer/>
        </div>
      );
  
    }
  }
  export default withRouter(LoginComponent);