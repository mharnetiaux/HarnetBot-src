import './styles/app.styles.less';
import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <section>
               <p>Hello from react</p>
            </section>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));
