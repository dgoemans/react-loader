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
    return (<div style={{margin: "auto", display: "inline-block"}}><Loader percent={this.state.percent} /></div>);
    }
}

render(<App/>, document.getElementById('app'));