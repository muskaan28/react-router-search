import React from 'react';


const txtStyle={
    border:'1px solid red',
    backgroundColor:'lightgreen'
}

export var Comment = () => <ul>
    <li>First comment</li>
    <li>Second comment</li>
    <li>Thirdcomment</li>
</ul>
export var Form = () => <React.Fragment>
    <input type="text" style={txtStyle} />
    <input type="button" value="Using Fragment !" />    
</React.Fragment>

export class Blog extends React.Component{
    render(){
        return <React.Fragment>
            {this.props.children}
        </React.Fragment>
    }
}
                
    

