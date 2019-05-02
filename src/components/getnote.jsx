import React from 'react';
import Card from '@material-ui/core/Card';
// import {getNotes} from "../services/noteservice"
import { noteArray, getNotes } from "../services/noteservice"

class GetNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note:[]
        };
        this.displayCard = this.displayCard.bind(this);
      
    }

    componentDidMount() {
        console.log('Componenet mount');
        getNotes()
            .then((result) => {
                console.log('Componenet response', result);
                this.setState({
                    note: result.data.data
                })
                console.log("get notes", result.data.data);
            })
            .catch((error) => {
                alert(error)
            });
    }


    displayCard(newCard){
        this.setState({
            note:[this.state.note,newCard]     
        })
       
        
        
    }

    render(){
        let notearray= noteArray(this.state.note);
        
        
        console.log('state', this.state.note);
        console.log('notearr', notearray);
        return(
            <div>
                {Object.keys(notearray).map((key) => {
                    console.log("noteArr", notearray[key]);
                    return(
                        <div keys={key} className="getCard">
                            <Card className="getAllCard">
                            <div>
                            {notearray[key].title}
                           </div>
                           {/* Title:{noteArr.title}
                                description:{noteArr.description} */}
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default GetNote;