import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Register from "../components/register";
class Registeration extends Component{
    render(){
        return (
            <div className="container">
            <Card className="card">

            <font color="A29020"><h1><b>FundooNotes</b></h1></font>
                <h2>Create Your FundooNotes Account</h2>
              
                    <div>    
                    </div>
                    <Register/>
                    </Card>
            </div>
        );
    }
}
export default Registeration;