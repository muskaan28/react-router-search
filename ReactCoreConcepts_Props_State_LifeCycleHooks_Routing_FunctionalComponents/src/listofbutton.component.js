import React from 'react';
import CustomButton from './custombutton.component';

export default class ListOfButtonsComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {buttonlist : [10,20,30,40,50]}
    }
    AddNewButton(){
        // console.log('Within AddNewButton..(setting state)')        
                this.setState({buttonlist:[...this.state.buttonlist,
                    +(this.refs.txtInput.value)]}); // get the Value from text
    }
    DeleteAButton(){
            let thebuttonToBeDeleted = this.refs.txtInput.value;
            var theNewList = this.state.buttonlist.filter(v => v!= thebuttonToBeDeleted);
            this.setState({buttonlist:theNewList});            
    }
    render(){
        console.log(this.state.buttonlist);
        // console.log('Within render..');
        var buttonsToBeCreated = this.state.buttonlist.map(b => 
        <CustomButton initialCount={b} key={b}/>);
        return <div>
                        Enter Number : <input type="text" ref="txtInput" /> 
                        <button className="btn btn-success"
                         onClick={this.AddNewButton.bind(this)}>
                                Add
                                <span className="glyphicon glyphicon-plus-sign"></span>
                        </button> 
                        <button className="btn btn-danger"
                         onClick={this.DeleteAButton.bind(this)}>
                                Remove
                                <span className="glyphicon glyphicon-minus-sign"></span>
                        </button> 
                        <br/>
                        {buttonsToBeCreated}
                    </div>
    }
}