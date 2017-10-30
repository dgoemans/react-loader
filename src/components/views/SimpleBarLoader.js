import React from 'react';
import styles from "./SimpleBarLoader.css";

class SimpleBarLoader
{
    render(percent)
    {
        return (<div className="bar-parent"><div className="bar-loader" style={{width: percent + '%'}}></div></div>);
    }
}

export default SimpleBarLoader;