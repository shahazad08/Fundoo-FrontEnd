import React, { Component } from 'react';
import { IconButton, Tooltip, Card, ClickAwayListener } from '@material-ui/core';


const colorCodesAndNames = [{ name: "white" },
{ name: "lightGreen",hexCode:"#90EE90" },
{ name: "pink", hexCode:"#FFC0CB"},
{ name: "orange",hexCode: "#FFA500"},
{ name: "blue",hexCode :"#0000FF"},
{ name: "brown" ,hexCode:"#A52A2A"},
{ name: "purple" ,hexCode:"#800080"},
{ name: "red" ,hexCode:"#FF0000"},
{ name: "Teal" ,hexCode:"#008080"},
{ name: "yellow" ,hexCode:"#FFFF00"},
{ name: "darkBlue",hexCode:"#00008B" },
{ name: "gray",hexCode:"#808080" }
]
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