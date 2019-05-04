import React, { Component } from "react";
import Card from '@material-ui/core/Card';
 import {getNotes} from "../services/noteservice"

import {noteArray} from '../services/noteservice'
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

    displayNewCard=(Note)=>{
        console.log("Note in getNote",this.state.note);
        console.log("My Notesss",Note);
        this.setState({
            note:[...this.state.note,Note.status.details]     
        })
       console.log("Note in GetNoteas",this.state.note);
    }

    render(){
        let notearray= noteArray(this.state.note);
        console.log('state', this.state.note);
        console.log('notearr', notearray);
        return(
            <div className="mainCard">
                {Object.keys(notearray).map((key) => {
                    console.log("noteArr", notearray[key]);
                    console.log("keysss",key);
                    
                    return(
                        <div key={key}>
                            <Card className="getAllCard">
                            {notearray[key].title}<br></br>
                           {notearray[key].description}

                           <div className="noteLogo">
                           <div className="imageSize1">
                                <img src={require('../assets/images/note_reminder.svg')} alt="reminder" />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_collab.svg')} alt="collab" />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_color.svg')} alt="color" />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_image.svg')} alt="note_image" />
                            </div>
                            <div className="imageSize1">
                                <img src={require('../assets/images/note_archive.svg')} alt="archive" />
                            </div>
                               </div>
                            </Card>
                        </div>
                        
                    )
                })}
            </div>
           
        )
    }
}
export default GetNote;