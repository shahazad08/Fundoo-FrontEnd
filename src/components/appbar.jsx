import React, { Component } from 'react';
import { AppBar, Card, Toolbar, IconButton, InputBase, MuiThemeProvider, createMuiTheme, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawers from "../components/drawer"
import {withRouter} from "react-router-dom"

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 80,
                width: 280,
            },
        },
        MuiAppBar: {
            root: {
                display: 'flex',
                flexDirection: "row"

            },
            colorPrimary: {
                color: "gray",
                fontSize: 25,
                fontFamily: "sans-serif"
            },
        },
        MuiToolbar: {
            regular: {
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
            }
        },
        MuiMenuItem: {
            root: {
                borderBottomRightRadius: "25px",
                borderTopRightRadius: "25px",
                height: "30px"
            },
        },
    },
})

class AppbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.handleSearchBar = this.handleSearchBar.bind(this);
    }
    handleToggle = () => {
        this.setState({ open: !this.state.open });
    }
   
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleSearchBar(evt) {
        this.setState({ search: evt.target.value });

    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    LoginClick=()=> {
        this.props.history.push('login')
      }
    RegisterClick=()=> {
        this.props.history.push('register')
      }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="fixed" id="appbar" >
                    <Toolbar>
                        <div id="appBarMenuAndTitle">
                            <div>
                                <IconButton color="inherit" aria-label="Open drawer" >
                                    <Tooltip title="Menu">
                                        <MenuIcon id="menu" onClick={this.handleToggle} />
                                    </Tooltip>
                                </IconButton>
                            </div>

                            <img src={require('../assets/images/keep.svg')} alt="keep icon" />
                            <span className="title">fundooNotes</span>
                        </div>

                        <div id="appBarIcons">

                            <div id="searchBar">
                                <Card>
                                    <IconButton color="inherit" aria-label="Open drawer" style={{ marginLeft: "8px" }} >
                                        <Tooltip title="Search">
                                            <SearchIcon style={{ color: "gray" }} />
                                        </Tooltip>
                                    </IconButton>
                                    <InputBase
                                        id="searchInputBase"
                                        placeholder="Search.."
                                        onChange={this.handleSearchBar}
                                    />
                                </Card>
                            </div>

                            <div>
                                <img className="viewimage" src={require('../assets/images/view.svg')} alt="keep icon" />
                            </div>

                            <div className="profile">
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.RegisterClick}>Add account</MenuItem>
                                    <MenuItem onClick={this.LoginClick}>Sign Out</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </Toolbar>
                    <Drawers
                        appBarProps={this.state.open}
                    />
                </AppBar>

            </MuiThemeProvider>
        )
    }
}
export default withRouter(AppbarComponent);