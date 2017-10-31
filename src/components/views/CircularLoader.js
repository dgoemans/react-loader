import React from 'react';
import styles from "./CircularLoader.css";

class CircularLoader
{
    render(percent, config)
    {
        return (<div className="arc-parent"><div className="arc-loader"></div></div>);
    }
}

export default CircularLoader;