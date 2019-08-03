import React, { Component } from 'react';


class HeaderText extends Component {
    componentWillReceiveProps(){
        console.log('Within componentWillReceiveProps (child)')
    }
    componentWillMount(){
        console.log('Within componentWillMount.. (child)');
    }

    componentDidMount(){
        console.log('Within componentDidMount.. (child)');
    }

    shouldComponentUpdate(){
        console.log('Within shouldComponentUpdate (child)');
        return true;
    }

    componentWillUpdate(){
        console.log('Within componentWillUpdate (child)');
    }
    componentDidUpdate(){
        console.log('Within componentDidUpdate (child)');
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps (child)')
    }
    render(){
        console.log('render (child)')

        return <h1>{this.props.text}</h1>
    }    
}
export default HeaderText;