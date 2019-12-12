import React from 'react';

export default function Node({row, col}) {

        // let classNameX = start ? 'node-start' : end ? 'node-end' : ''
            let nodeColor = "white";
            if ((row + col) % 2 === 0) nodeColor = `rgb(42, 226, 156)`;
               
        

        return (
        <div className={`actual-node rc${row}-${col}`} id={`node-${row}-${col}`} style={{"background-color":`${nodeColor}`}}>
           
        </div>)
}