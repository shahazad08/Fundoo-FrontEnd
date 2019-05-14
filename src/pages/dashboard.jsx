import React, { Component } from "react";
import AppbarComponent from "../components/appbar";
import WebView from "../components/webview";
//import CreateNote from "../components/createNote";
//import GetNote from "../components/getnote";
// import ForgetPwdComponent from """../components/forgetpwd";
class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
            open: false,
            cardstyle:false
           //  newCard:[]
        }
        //this.newCard = this.newCard.bind(this);
        this.noteToCards=React.createRef();
        this.handlecardstyle=this.handlecardstyle.bind(this);
        this.getNewNote = this.getNewNote.bind(this);
    }
    getNewNote(Note){ 
        this.noteToCards.current.displayNewCard(Note);
    }
    handlecardstyle(){
      this.setState({cardstyle:!this.state.cardstyle})
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
                    <AppbarComponent
                    viewprops={this.handlecardstyle}
                    />
                    <div className="maindiv" position="fixed">
                    <div className="notedirection">
                    <WebView/>
                        {/* <CreateNote getNewNote={this.getNewNote}/> */}
                        </div>
                   
                    {/* <GetNote
                        ref={this.noteToCards}
                        noteviewprops={this.state.cardstyle}
                        /> */}
                        </div>
            </div>
        );
        }
    }
}
export default Dashboard;