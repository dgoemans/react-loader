import React from 'react';
import {render} from 'react-dom';
import Loader from './components/Loader';

class App extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            percent: 0
        }

        this.colors = [
            "#333333",
            "#999999",
            "#dddddd"
        ]
        
        setInterval(this.increasePercent.bind(this), 100);
    }

    increasePercent()
    {
        let percent = this.state.percent;

        percent = (percent + 1) % 101;

        this.setState({
                percent: percent
            });

    }
    
    render () {
    return (<div style={{margin: "auto", display: "inline-block"}}><Loader percent={this.state.percent} config={{ colors: this.colors }} /></div>);
    }
}

render(<App/>, document.getElementById('app'));