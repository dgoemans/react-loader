import React from 'react';
import styles from "./SimpleBarLoader.css";

class SimpleBarLoader
{
    render(percent)
    {
        let colors = [
            "#F25F5C"
            // "#F25F5C",
            // "#FFE066",
            // "#247BA0",
            // "#70C1B3"
        ];

        let currentColor = colors[Math.floor(percent/100*colors.length)]; 

        return (<div className="bar-parent"><div className="bar-loader" style={{width: percent + '%', backgroundColor: currentColor}}></div></div>);
    }
}

export default SimpleBarLoader;