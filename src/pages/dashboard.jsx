import React, { Component } from "react";
import AppbarComponent from "../components/appbar";
import CreateNote from "../components/createNote";
// import ForgetPwdComponent from """../components/forgetpwd";
class Dashboard extends Component{
    render(){
        return (
            <div className="container">
                    <div>    
                    </div>
                    <AppbarComponent/>
                    <div className='notestyle'>
                        <CreateNote/>
                    </div>
            </div>
        );
    }
}
export default Dashboard;