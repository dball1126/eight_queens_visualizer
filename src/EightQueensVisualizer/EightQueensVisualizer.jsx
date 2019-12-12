import React, {useEffect, useState} from 'react';
import Node from './Node/Node';

export default function EightQueensVisualizer(){
    const [state, setState] = useState({ nodes: [] });
    const nodes = React.useMemo(() => state.nodes, []);

    useEffect(() =>{
        for (let row = 0; row < 8; row++) {
            const currentRow = [];
            for (let col = 0; col < 8; col++) {
                const currentNode = {
                    row,
                    col,
                }
    
                currentRow.push(currentNode)
            }
    
            nodes.push(currentRow)
        }

            setState(prevState => {
                
                return { ...prevState, ...nodes }
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
                                {row.map((node, nodeIdx) => {
                                    const { row, col } = node;
                                    return <Node key={nodeIdx}
                                        row={row}
                                        col={col}
                                       
                                    />
                                })
                                }
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
    
}