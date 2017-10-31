import React from 'react';
import styles from "./BouncingBallLoader.css";

class BouncingBallLoader
{
    render(percent)
    {
        let balls = [];

        for(var i=0; i<4; i++)
        {
            let jsx = <div key={i} className={"ball-loader ball"+(i+1)  } style={{ animationDelay: i*0.1 + "s" }}></div>;

            balls.push(jsx)
        }

        return (<div className="balls-parent">
                {balls}
            </div>);
    }
}

export default BouncingBallLoader;