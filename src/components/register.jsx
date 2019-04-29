import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {UserRegister} from '../services/userservices'
import {withRouter} from "react-router-dom"

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      service:"",
      password: "",
      confirmPassword: "",
      toast:false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        service:"",
        password: "",
        confirmPassword: ""
}    
    };
    this.baseState = this.state
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "mini 3 char req" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "min 3 char req" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
        case "service":
        formErrors.service =
          value.length < 3 ? "mini 3 char req" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "min 6 char req" : "";
        break;

        case "confirmPassword":
        formErrors.confirmPassword =
          value.length < 6 ? "min 6 char req" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };



  handleSubmit = e => {
    e.preventDefault();

    // if (formValid(this.state)) {
    //   console.log(`
    //     --SUBMITTING--
    //     First Name: ${this.state.firstName}
    //     Last Name: ${this.state.lastName}
    //     Email: ${this.state.email}
    //     Password: ${this.state.password}
    //     confirm Password: ${this.state.confirmPassword} 
    //   `);

    //  } 
     
     
     if(this.state.firstName!=="" || this.state.lastName!== "" || this.state.email!=="" || this.state.service!=="" ||this.state.password!=="" ||this.state.confirmPassword!=="")
      {
      var data={
        "firstName":this.state.firstName,
        "lastName":this.state.lastName,
        "email":this.state.email,
        "service":this.state.service,
        "password":this.state.password,
       // "confirmPassword":this.state.confirmPassword,
      }
      UserRegister(data);
      console.log("tetr4t",data);
      
    }
  
  else{
      toast("Fields are Missing", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      
    
    }
  }

LoginClick=()=> {
  this.props.history.push('login')
}

  render() {
    const { formErrors } = this.state;
    return (
      <div>



<div className="fields">
          <TextField style={{
            width:"58%"
          }}
           className={formErrors.firstName.length > 0 ? "error" : null}
            label="firstName"
            name="firstName"
            
            value={this.state.firstName}
            onChange={this.handleChange}
            noValidate
            margin="normal"
            variant="outlined"
            
          />
          <div>
          {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
)}
            </div>
            </div>

<div className="fields">
          <TextField style={{
            width:"58%"
          }}
           className={formErrors.lastName.length > 0 ? "error" : null}
            label="lastName"
            name="lastName"
          
            value={this.state.lastName}
            onChange={this.handleChange}
            noValidate
            margin="normal"
            variant="outlined"
            
          />
          <div>
          {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
)}
            </div>

 </div>

      
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
           className={formErrors.service.length > 0 ? "error" : null}
            label="Service"
            name="service"
            value={this.state.service}
            onChange={this.handleChange}
            noValidate
            margin="normal"
            variant="outlined"
            
          />
          <div>
          {formErrors.service.length > 0 && (
                <span className="errorMessage">{formErrors.service}</span>
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

    <div className="fields">
          <TextField style={{
            width:"58%"
          }}
           className={formErrors.confirmPassword.length > 0 ? "error" : null}
            label="confirmPassword"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            noValidate
            margin="normal"
            variant="outlined"
            
          />
          <div>
          {formErrors.confirmPassword.length > 0 && (
                <span className="errorMessage">{formErrors.confirmPassword}</span>
)}
            </div>

 </div>

         <div className="buttons">
        <Button id="signbutton" onClick={this.LoginClick}>
            sign in instead
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
export default withRouter(Register);