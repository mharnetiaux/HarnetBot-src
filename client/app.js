import { DirectLine } from 'botframework-directlinejs';
import './styles/app.styles.less';
import React, {Component} from 'react';
import ReactWebChat from 'botframework-webchat';
import axios from 'axios';
import {render} from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            directLine: undefined
        };
    }

    componentDidMount() {
        axios({
            method: 'post',
            url: 'https://directline.botframework.com/v3/directline/tokens/generate',
            headers: {
                Accept: "*/*",
                Authorization: "Bearer OZZC4b2L4Yo.YTksjo_Z0IU0bu8QgCeDHgVibWcEk4ooaZgyiD4vvHE",
            }
        }).then(response => {
            this.setState({
                directLine: new DirectLine({ token: response.data.token})
            });
        }).then(()=>{
            document.getElementsByTagName('input')[1].focus();
        });
    }

    render() {
        return (
            <section>
                <header>
                    <h2>Welcome to <span className="logo">i</span>diom</h2>
                    <p>Search for an idiom and I will provide the meaning.</p>
                </header>
                {
                    this.state.directLine ? <ReactWebChat id="test" className="webChat" directLine={this.state.directLine}/> : null
                }
            </section>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));
