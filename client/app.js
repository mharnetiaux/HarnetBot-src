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
        });
    }

    render() {
        return (
            <section>
                <h2>Welcome to Idiom</h2>
                <p>Search for an idiom and I will provide the meaning.</p>
                {
                    this.state.directLine ? <ReactWebChat id="test" className="webChat" directLine={this.state.directLine}/> : <div>Sorry, no service. Check back later</div>
                }
            </section>
        )
    }
}

render((
    <App/>
), document.getElementById('root'));
