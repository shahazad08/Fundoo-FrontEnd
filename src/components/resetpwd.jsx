import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResetPasswordUser} from '../services/userservices'

class ResetPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            // confirmPassword: "",
            formErrors: {
                newPassword: "",
                // confirmPassword: "",
            }
        };
        this.baseState = this.state
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "newPassword":
                formErrors.newPassword =
                    value.length < 6 ? "min 6 char req" : "";
                break;

       
                default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };



    handleSubmit = e => {
        e.preventDefault();

    if(this.state.newPassword!=="")
    {
    var data={
      "newPassword":this.state.newPassword,
    //   "confirmPassword":this.state.confirmPassword
   
    }
    ResetPasswordUser(data);
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
                        width: "58%"
                    }}
                        className={formErrors.newPassword.length > 0 ? "error" : null}
                        label="New Password"
                        name="newPassword"
                        type="password"
                        value={this.state.newPassword}
                        onChange={this.handleChange}
                        noValidate
                        margin="normal"
                        variant="outlined"
                    />
                    <div>
                        {formErrors.newPassword.length > 0 && (
                            <span className="errorMessage">{formErrors.newPassword}</span>
                        )}
                    </div>
                </div>
                {/* </div> */}
                <div className="buttons">
                    <Button id="signbutton" onClick={this.handleSubmit}>
                        Password Reset
                </Button>

                </div>
                <ToastContainer/>
            </div>
        );

    }
}
export default ResetPasswordComponent;