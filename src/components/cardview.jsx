import React, { Component } from 'react';
import { Tooltip } from '@material-ui/core';

class CardView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view: false
        }
        this.handleCardsView = this.handleCardsView.bind(this);
    }

    handleCardsView(evt) {
        try{
        evt.preventDefault();
        this.setState({ view: !this.state.view });
        this.props.CardViewprops();
        }catch(err){
            console.log("error in handle card view");
        }
    }

    render() {
        return (
            !this.state.view ?
                <div>
               
                        <Tooltip title="List View" onClick={this.handleCardsView}>
                            <img className="viewimage" src={require('../assets/images/view.svg')} alt="grid icon" />
                        </Tooltip>
             
                </div>
                :
            <div>
                   
                        <Tooltip title="Grid View" onClick={this.handleCardsView}>
                            <img className="viewimage" src={require('../assets/images/grid.svg')} alt="grid icon" />
                        </Tooltip>
                  
                </div>
        )

    }
}
export default CardView