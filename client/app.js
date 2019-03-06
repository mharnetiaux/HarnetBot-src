import './styles/app.styles.less';
import React, {Component} from 'react';
import {render} from 'react-dom';

class Bot extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <div>Hello with React and other stuff :)</div>
    )
    }
}

render((
    <Bot/>
), document.getElementById('root'));