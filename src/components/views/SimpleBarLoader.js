import React from 'react';
import styles from "./SimpleBarLoader.css";
import ColorHelper from '../../helpers/ColorHelper';

class SimpleBarLoader
{
    render(percent, config)
    {
        let colors = config.colors;

        colors.push(config.colors[0]);

        let calculatedColor = ColorHelper.getLerpedColorAtProgress(percent, colors);

        return (<div className="bar-parent"><div className="bar-loader" style={{width: percent + '%', backgroundColor: calculatedColor}}></div></div>);
    }
}

export default SimpleBarLoader;