import React from 'react';
import Card from '@material-ui/core/Card';

class CreateNote extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        open: false,
    };
}
    handleToggle(){
        this.setState({ openNote: !this.state.open });
    }

    render() {
        return (
            !this.state.open ?
            <div className='stylenote'>
            <Card className='cardsize'>
            <div className='inputnote'>
             <input onClick={this.handleToggle}
             className='inputbase'
              placeholder='Take a Note...'>
              
             </input>
            </div>
              
                
              
            </Card>
            </div>
            :
            <div className='stylenote'>
            <Card className='cardsize'>
            <div className='inputnote'>
             <input
             className='inputbase'
              placeholder='Take a Note...'>
             </input>
            </div>
              
                
              
            </Card>
            </div>
        )}
}
export default CreateNote;
