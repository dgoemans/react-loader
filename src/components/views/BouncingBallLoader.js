import React from 'react';
import styles from "./BouncingBallLoader.css";

class BouncingBallLoader
{
    render(percent, config)
    {
        let balls = [];

        for(var i=0; i<4; i++)
        {
            let jsx = <div key={i} className="ball-loader" style={{ animationDelay: i*0.1 + "s", backgroundColor: config.colors[i] }}></div>;

            balls.push(jsx)
        }

        return (<div className="balls-parent">
                {balls}
            </div>);
    }
}

export default BouncingBallLoader;