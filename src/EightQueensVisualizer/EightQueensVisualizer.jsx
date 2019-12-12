import React, {useEffect, useState} from 'react';
import Node from './Node/Node';

export default function EightQueensVisualizer(){
    const [state, setState] = useState({ nodes: [] });
    const nodes = React.useMemo(() => state.nodes, []);

    useEffect(() =>{
        for (let row = 0; row < 30; row++) {
                const currentNode = {
                    val : row
                }
            nodes.push(currentNode)
        }

            setState(prevState => {
                
                return { ...prevState, ...nodes.sort(() => Math.random() - 0.5) }
            });
    }, []);
       
    return (
        <>
            <h1>Eight Queens Visualizer</h1>
            <div className="button-box">
                {/* <button className="button" onClick={() => visualize("greedy")}>Visualize Greedy Search</button> */}
                <button className="button" onClick={() => window.location.reload()}>Reset</button>
            </div>
            <div className="grid-box">
                <div className="grid">
                    {nodes.map((row, idx) => {

                        return (
                            <div className="nodes" key={idx}>
                               
                                     <Node key={idx}
                                        val={row}
                                    />
                                
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
    
}