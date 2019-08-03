import React from 'react';

export default class CustomButtonComponent extends React.Component{
   constructor(props){
       super(props);
       this.state = {count:this.props.initialCount};
   }
    IncrementCount(){
        // change logic !
        //this.state.count++;
        this.setState({count:this.state.count+1})
    }   
    componentWillUnmount(){
        console.log('Unmounting..')
    }
    render(){
        return <button className="btn btn-primary" 
        onClick={this.IncrementCount.bind(this)}>
                         {this.state.count}
                    </button>
    }
}