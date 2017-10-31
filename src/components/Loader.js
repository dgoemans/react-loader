import React from 'react';
import {render} from 'react-dom';
import SimpleTextLoader from './views/SimpleTextLoader';
import CircularLoader from './views/CircularLoader';
import SimpleBarLoader from './views/SimpleBarLoader';
import BouncingBallLoader from './views/BouncingBallLoader';


class Loader extends React.Component
{
    constructor(props)
    {
        super(props);

        this.config = props.config || {
            colors: [
                "#F25F5C",
                "#FFE066",
                "#247BA0",
                "#70C1B3"
            ],
        }

        // TODOS:
        // - Change the size?

        this.loader = new SimpleBarLoader();
    }

    render()
    {
        return this.loader.render(this.props.percent, this.config);
    }
}

export default Loader;