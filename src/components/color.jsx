import React, { Component } from 'react';
import { IconButton, Tooltip, Card, ClickAwayListener } from '@material-ui/core';
import content from '../content';

// Color details for the notes
const colorCodesAndNames = content;

/**
 * @description Color component
 * @method closePopUp
 * @method handleColor
 * @method handleToggle
 */
class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleColor = this.handleColor.bind(this);
    }

    closePopper() {
        this.setState({
            open: false
        })
    }

    handleColor(evt) {
        // this.props.getcolorprops(evt.target.value)
        console.log("note id",this.props.noteID);
        this.props.getcolorprops(evt.target.value,this.props.noteID)
    }


    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const changeCardColor = colorCodesAndNames.map((colorKey) =>
            <Tooltip title={colorKey.name}>
                <IconButton style={{ backgroundColor: colorKey.hexCode, "margin": "2px", }}
                    value={colorKey.hexCode}
                    onClick={this.handleColor}>
                </IconButton>
            </Tooltip>
        );

        return (
            <div>
                <Tooltip title="Change Color">
                    <img src={require('../assets/images/note_color.svg')}
                        className="colorPalleteIcon"
                        alt="change color"
                        onClick={this.handleToggle}
                    />
                </Tooltip>
                <div>
                    {this.state.open ?
                        <ClickAwayListener onClick={() => this.closePopper()}>
                            <Card className="colorPalleteCard">
                                {changeCardColor}
                            </Card>
                        </ClickAwayListener>

                        : null}
                </div>
            </div>

        )
    }
}

export default Color;