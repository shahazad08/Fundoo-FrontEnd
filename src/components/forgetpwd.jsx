import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { ForgetPasswordUser} from '../services/userservices'
import { ToastContainer,toast} from "react-toastify";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;

//     // validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });

//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//         val === null && (valid = false);
//     });

//     return valid;
// };


class ForgetPwdComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            formErrors: {
                email: "",
            }
        };
        this.baseState = this.state
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
            default:
            break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      

      handleSubmit = e => {
        e.preventDefault();
    
    //     if (formValid(this.state)) {
    //       console.log(`
    //         --SUBMITTING--
    //         Email: ${this.state.email}
    //       `);
    //     } else {
    //         console.log(`Invalid Email`);
    //     }
    //   };


    if(this.state.email!=="")
    {
    var data={
      "email":this.state.email,
   
    }
    ForgetPasswordUser(data);
    console.log("*****",data);
    
  }

else{
    toast("Fields are Missing", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    
  
  }
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
       
           <div className="resetbuttons">
          <Button id="signbutton" onClick={this.handleSubmit}>
              Reset Password!
            </Button>
            </div>
            <ToastContainer/>
        </div>
      );
  
    }
  }
  export default ForgetPwdComponent;