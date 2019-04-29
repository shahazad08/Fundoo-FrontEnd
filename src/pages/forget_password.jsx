import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import ForgetPwdComponent from "../components/forgetpwd";
class ForgetPassword extends Component{
    render(){
        return (
            <div className="container">
            <Card className="card">
            <h2>Forget Password, please Click here!</h2>
                    <div>    
                    </div>
                    <ForgetPwdComponent/>
                    </Card>
            </div>
        );
    }
}
export default ForgetPassword;