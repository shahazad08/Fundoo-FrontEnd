import React, { Component } from "react";
import {Card,Chip} from '@material-ui/core';
import {getNotes,updateColor, updateReminder,deleteReminder} from "../services/noteservice"
import Color from '../components/color';
import {noteArray} from '../services/noteservice'
import Reminder from "./reminder";
class GetNote extends Component {
    constructor(){
        super();
        this.state = {
            note:[]
        };
        this.displayNewCard = this.displayNewCard.bind(this);
    }

    componentDidMount() {
        getNotes()
            .then((result) => {
                this.setState({
                    
                    note: result.data.data.data
                })
                console.log("get notes 21",this.state.note);

            })
            .catch((error) => {
                alert(error)
            });
    }
    getColor=(value,noteID)=>{
        var noteColor={
            "noteIdList":[noteID],
            "color":value
 
        }
        console.log("check it",noteColor);
        
        updateColor('notes/changesColorNotes',noteColor)
        .then((result) => {
            console.log("result",result);
            
            const newArray = this.state.note
            console.log("edrewr",newArray);
            
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i].id === noteID) {
                    newArray[i].color= value;
                    this.setState({
                        note: newArray
                    })
                }
            }
            console.log("NOtessss",this.state.note);
        })
        .catch((error) => {
            alert(error)
        });
    }

    getReminder=(value,noteID)=>{
        var noteReminder={
            "noteIdList":[noteID],
            "reminder":value
        }
        console.log("check it",noteReminder);
        
        updateReminder('notes/addUpdateReminderNotes',noteReminder)
        .then((result) => {
            console.log("result",result);
            
            const newArray = this.state.note
            console.log("reminder array",newArray);
            
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i].id === noteID) {
                    newArray[i].reminder= value;
                    this.setState({
                        note: newArray
                    })
                }
            }
            console.log("NOtessss",this.state.note);
        })
        .catch((error) => {
            alert(error)
        });
    }

    getdeleteReminder=(value,noteID)=>{
        var noteReminder={
            "noteIdList":[noteID],
            "reminder":value
        }
        console.log("check it",noteReminder);
        
        deleteReminder('notes/removeReminderNotes',noteReminder)
        .then((result) => {
            console.log("result",result);
            
            const newArray = this.state.note
            console.log("delete reminder array",newArray);
            
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i].id === noteID) {
                    newArray[i].reminder= value;
                    this.setState({
                        note: newArray
                    })
                }
            }
            console.log("NOtessss",this.state.note);
        })
        .catch((error) => {
            alert(error)
        });
    }


    displayNewCard=(Note)=>{
        console.log("Note in getNote",this.state.note);
        console.log("My Notesss",Note);
        this.setState({
            note:[...this.state.note,Note.status.details]     
        })
       console.log("Note in GetNoteas",this.state.note);
    }

    render(){
        let cardsview=!this.props.noteviewprops ? "listcards":"gridcards";
        let notearray= noteArray(this.state.note);
        console.log('state', this.state.note);
        console.log('notearr', notearray);
        return(
            <div className="mainCard">
                {Object.keys(notearray).map((key) => {
                    console.log("noteArr", notearray[key]);
                    console.log("keysss",key);

                    return(
                        // <div key={key}>
                            <Card
                             key={key} className={cardsview}  style={{
                                backgroundColor:notearray[key].color
                            }}>
                            <div style={{
                                display:"flex"
                            }}>
                            {notearray[key].title}<br></br>
                           {notearray[key].description}<br></br>
                           </div>
                           {notearray[key].reminder?
                           <Chip style={{
                               display:"flex",
                               width:"56px"
                           }}
                           label={notearray[key].reminder}
                           onDelete={() => this.getdeleteReminder('', notearray[key].id)}
                         />
                         :
                         null}
                             
                           <div className="noteLogo">
                           <div className="imageSize1">
                               <Reminder 
                               reminder={this.getReminder}
                               noteID={notearray[key].id}/>
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_collab.svg')} alt="collab" />
                            </div>
                            <div className="imageSize1">

                            <Color getcolorprops={this.getColor}
                               noteID={notearray[key].id}
                               //sendColorProps={this.getColor}
                            />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_image.svg')} alt="note_image" />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_archive.svg')} alt="archive" />
                            </div>
                           
                               </div>
                            </Card>
                        // </div>    
                    )
                })}
            </div>
           
        )
    }
}
export default GetNote;