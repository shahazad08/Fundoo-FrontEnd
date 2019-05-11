import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import ResetPasswordComponent from "../components/resetpwd";
class ResetPassword extends Component{
    render(){
        return (
            <div className="container">
            <Card className="card">
                <h2>Reset your Password</h2>
                    <div>    
                    </div>
                    <ResetPasswordComponent/>
                    </Card>
            </div>
        );
    }
}
export default ResetPassword;