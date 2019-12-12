import React from 'react';

export default function Node({val}) {

        // let classNameX = start ? 'node-start' : end ? 'node-end' : ''
        
        
        

        return (
        <div className={`actual-node ${"classNameX"}`} id={`node-${val.val}`}>
           
        </div>)
}