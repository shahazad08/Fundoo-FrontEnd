import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        // this.handleReminder = this.handleColor.bind(this);
    }

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      setTodayReminder =()=>{
        try
        {
            this.handleClose();
            let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
            var date = new Date().toDateString();
            var reminder1 = date+ ", 8:00 "+ampm;
            console.log("in reminder1==>",reminder1);
            this.props.reminder(reminder1,this.props.noteID)
        }
        catch(err)
        {
            console.log("error in set reminder for today");
        }
      }

 

    render(){
        const { open } = this.state;
        return (
          
            <div>
 <div>
         <img src={require('../assets/images/note_reminder.svg')} alt="reminder"
            onClick={this.handleToggle}
          >
         </img>
         
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList >
                      <MenuItem  onClick={this.setTodayReminder} >
                     
                      <div > Later today</div>
                      <div>8:00</div></MenuItem>
                      <MenuItem onClick={this.setTomorrowReminder}>Set Tomorrow's Reminder</MenuItem>
                      <MenuItem onClick={this.setWeeklyReminder}>Set Weekly Reminder</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
     </div>
        )
    }
}

export default Reminder;


