import React, { Component } from "react";
import AppbarComponent from "../components/appbar";
import CreateNote from "../components/createNote";
import GetNote from "../components/getnote";
// import ForgetPwdComponent from """../components/forgetpwd";
class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
            open: false,
           //  newCard:[]
        }
        this.newNote = this.newNote.bind(this);
        //this.newCard = this.newCard.bind(this);
        this.referenceCard=React.createRef()
    }
    newNote(newCard){
        this.referenceCard.current.displayCard(newCard)
    }
    render(){
       if(localStorage.getItem('token1') !== "true"){
            return(
              window.location.href = 'login'
            )
          }
        else{
        return (
            <div className="container">
                    <div>    
                    </div>
                    <AppbarComponent/>
                    <div className='notestyle'>
                        <CreateNote newNote={this.newNote}/>
                        <GetNote
                        ref={this.referenceCard}
                        />
                    </div>
            </div>
        );
        }
    }
}
export default Dashboard;