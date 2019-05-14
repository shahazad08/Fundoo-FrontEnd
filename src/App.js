import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registeration from './pages/registeration';
import Login from './pages/login';
import ForgetPassword from './pages/forget_password';
import ResetPassword from './pages/reset_password';
import Dashboard from './pages/dashboard';
import HOC from './pages/hoc';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/register" component={Registeration}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/forgetpassword" component={ForgetPassword}></Route>
            <Route path="/resetpassword" component={ResetPassword}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/hoc" component={HOC}></Route>
            
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
