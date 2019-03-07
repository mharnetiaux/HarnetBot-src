import { DirectLine } from 'botframework-directlinejs';
import './styles/app.styles.less';
import React, {Component} from 'react';
import ReactWebChat from 'botframework-webchat';
//import axios from 'axios';
import {render} from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: 'OZZC4b2L4Yo.dAA.MgBEAFIAbwAyAFkAegBGADMATQBQAEUAYQBDAFcAYwBFADkAdgBNAFYAZgAtAGcA.IkahKsbU1AE.xFcF3xA0QBs.gG4T5xMyC3GPDUrwt28TIoOKQJQ5B52SJ5Expq2s4Hs',
            user: 'C0AAYOXoBIY4FALzDgrIyo-g'
        };
        this.directLine = new DirectLine({ token: this.state.token});
    }

    render() {
        return (
            <section>
                <ReactWebChat directLine={ this.directLine } userID={this.state.user}/>
            </section>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));
