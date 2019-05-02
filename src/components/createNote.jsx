import React from 'react';
import Card from '@material-ui/core/Card';
import { InputBase, Button } from '@material-ui/core';
import { addNote } from "../services/noteservice";

class CreateNote extends React.Component {
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
    }
    handleToggle1 = () => {
        this.setState({ openNote: !this.state.openNote });
    }

    handleToggle = () => {
        this.setState({ openNote: !this.state.openNote });

        if (this.state.title !== "" || this.state.description !== "") {

            var note = {
                "title": this.state.title,
                "description": this.state.description
            }
            addNote(note)
                .then((result) => {
                    console.log("note response", result);

                    this.setState({
                        Note: result.data.data
                    })
                    this.props.newNote(this.state.Note)
                })
                .catch((error) => {
                    alert(error);
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

    handleReminder(value) {
        this.setState({ remindMe: value })
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
                <Card className='cardsize1'>
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
                                <img src={require('../assets/images/note_reminder.svg')} alt="reminder" />
                            </div>
                            <div className="imageSize">
                                <img src={require('../assets/images/note_collab.svg')} alt="collab" />
                            </div>
                            <div className="imageSize">
                                <img src={require('../assets/images/note_color.svg')} alt="color" />
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
