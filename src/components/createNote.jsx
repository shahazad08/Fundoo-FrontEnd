import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { InputBase, Button } from '@material-ui/core';
import { addNote } from "../services/noteservice";
import Color from '../components/color';
import Reminder from "./reminder";
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: false,
            title: "", 
            description: "",
            color: "",
            image: "",
            reminder: "",
            isPined: false,
            isArchive: false,
            istrash: false,
            Note: {}
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleColor=this.handleColor.bind(this);
        this.handleReminder=this.handleReminder.bind(this);
    }
    handleToggle1 = () => {
        this.setState({ openNote: !this.state.openNote });
    }

    handleToggle = () => {
        this.setState({ openNote: !this.state.openNote });

        if (this.state.title !== "" || this.state.description !== "") {

            var note = {
                "title": this.state.title, 
                "description": this.state.description,
                "color":this.state.color,
                "reminder":this.state.reminder
            }
            addNote(note)
                .then((result) => {
                    console.log("note response", result);
                    this.setState({
                        Note: result.data
                    })
                    console.log("Notes Does",this.state.Note);
                    
                    this.props.getNewNote(this.state.Note)
                  //  console.log("yhgyhugu",this.props.newNote(this.state.Note));
                    
                })
                .catch((error) => {
                    alert(error);
                })
                this.setState({
                    title: "",
                    description: "",
                    color:"",
                    reminder:""
                })
        }
        else {
            console.log('Fields are Missing')
        }

    }

    handleTitle = (evt) => {
        this.setState({ title: evt.target.value })
    }

    handleDescription = (evt) => {
        this.setState({ description: evt.target.value })
    }

    handleColor(value) {
        this.setState({ color: value })
    }

    handleReminder(value) {
        this.setState({ reminder: value })
    }

    render() {
        return (!this.state.openNote ?
            <div className='stylenote'>
                <Card className='cardsize'>
                    <div className='inputnote'>
                        <InputBase onClick={this.handleToggle1}
                            multiline
                            className='inputbase'
                            placeholder='Take a Note...' />
                    </div>
                </Card>
            </div>
            :
            <div className='stylenote'>
                <Card className='cardsize1' style={{
                    backgroundColor:this.state.color
                }}>
                    <div className='inputnote'>
                        <InputBase
                            multiline
                            className='inputbase'
                            placeholder='Title'
                            value={this.state.title}
                            onChange={this.handleTitle}
                        />
                    </div>
                    <div className='inputnote'>
                        <InputBase
                            multiline
                            className='inputbase'
                            placeholder='Take a Note..'

                            value={this.state.description}
                            onChange={this.handleDescription}
                        />
                    </div>


                    <div className="close">
                        <div className="noteLogo">
                            <div className="imageSize">
                                {/* <img src={require('../assets/images/note_reminder.svg')} alt="reminder" /> */}
                                <Reminder reminder={this.handleReminder}/>
                                
                            </div>
                            <div className="imageSize">
                                <img src={require('../assets/images/note_collab.svg')} alt="collab" />
                            </div>
                            <div className="imageSize">
                                {/* <img src={require('../assets/images/note_color.svg')} alt="color" /> */}
                                <Color getcolorprops={this.handleColor}/>

                            </div>
                            <div className="imageSize">
                                <img src={require('../assets/images/note_image.svg')} alt="note_image" />
                            </div>
                            <div className="imageSize">
                                <img src={require('../assets/images/note_archive.svg')} alt="archive" />
                            </div>
                        </div>

                        <Button
                            onClick={this.handleToggle}
                        >
                            Close
                 </Button>
                    </div>

                </Card>
            </div>
        )
    }
}
export default CreateNote;
