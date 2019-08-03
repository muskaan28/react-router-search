import React from 'react';
import HeaderText from './HeaderText.component';


export default class LifeCycleHooksComponent extends React.Component{
    

    constructor(props){
        console.log('Within constructor..(parent)');
        super(props);
        this.state = {companyName:''};
    }

    OnTextChanged(event){      
        console.log('Within OnTextChanged.. (parent)');
        this.setState({companyName:event.target.value})
    }

    componentWillMount(){
        console.log('Within componentWillMount.. (parent)');
    }

    componentDidMount(){
        console.log('Within componentDidMount.. (parent)');
    }

    shouldComponentUpdate(){       
        console.log('Within shouldComponentUpdate (parent)');

        if(arguments[1].companyName.length <10){
            return true;
        }
        return false;
    }

    componentWillUpdate(){
        console.log('Within componentWillUpdate (parent)');
    }
    componentDidUpdate(){
        console.log('Within componentDidUpdate (parent)');
    }
    
    render(){

        console.log('Within render.. (parent)');     
        return <div className="container">
            Company name : <input type="text" onChange={this.OnTextChanged.bind(this)} /> <br/>
            You Entered : <HeaderText text={this.state.companyName}/>
            </div>
    }
}