import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import LoginComponent from "../components/login_component";

class Login extends Component{
    render(){
        return (
            <div className="container">
            <Card className="card">
            <h2>Login to Fundoo Account</h2>
                    <div>    
                    </div>
                    <LoginComponent/>
                    </Card>
            </div>
        );
    }
}
export default Login;