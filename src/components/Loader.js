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

        // TODOS:
        // - Programmatically set the color scheme (CSS or JS?)
        // - Change the size?

        this.loader = new SimpleBarLoader();
    }

    render()
    {
        return this.loader.render(this.props.percent);
    }
}

export default Loader;