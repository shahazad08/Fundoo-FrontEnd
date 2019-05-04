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
        
        //this.newCard = this.newCard.bind(this);
        this.noteToCards=React.createRef();
        this.getNewNote = this.getNewNote.bind(this);
    }
    getNewNote(Note){ 
        this.noteToCards.current.displayNewCard(Note);
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
                    <AppbarComponent/>
                    <div className="maindiv">
                    <div className="notedirection">
                        <CreateNote getNewNote={this.getNewNote}/>
                        </div>
                   
                    <GetNote
                        ref={this.noteToCards}
                        />
                   
                        </div>
            </div>
        );
        }
    }
}
export default Dashboard;