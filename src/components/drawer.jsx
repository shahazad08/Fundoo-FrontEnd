import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


class Drawers extends React.Component {
    state = {
        open: false,
    };
    render() {
        return (
            <Drawer
                variant="persistent"
                open={this.props.appBarProps}
                width={250}
            >
                <MenuItem id="noteMenu">
                    <img src={require('../assets/images/bulb.svg')} alt="Bulb Icon" style={{ marginRight: "50px" }} />
                    Notes
                </MenuItem>

                <MenuItem id="reminderMenu">
                    <img src={require('../assets/images/index.svg')} alt="Reminder Icon" style={{ marginRight: "50px" }} />
                    Reminders
                </MenuItem>
                < Divider />
                <MenuItem id="labelMenu" onClick={this.handleEditLabel}>

                    <img src={require('../assets/images/label.svg')} alt="edit icon"
                        style={{ marginRight: "50px" }} />
                    Edit Labels
                  </MenuItem>
                <MenuItem id="archiveMenu">
                    <img src={require('../assets/images/archive.svg')} alt="Archive Icon" style={{ marginRight: "50px" }} />
                    Archive
                    </MenuItem>

                <MenuItem id="trashIcon">

                    <img src={require('../assets/images/trash.svg')} alt="Trash Icon" style={{ marginRight: "50px" }} />
                    Bin
                    </MenuItem>

            </Drawer>

        );
    }
}

export default Drawers;
