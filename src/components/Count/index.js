import React from 'react';
import {useState} from "react";

const Count = () => {
    const [count,setCount] = useState(0)
    return (
        <div className="container">
            <div className="count">
                <button onClick={()=> setCount(count + 1)}>+</button>
                <h1>{count}</h1>
                <button
                        onClick={()=>
                    setCount(count -1)
                }>-</button>
                <button onClick={()=> setCount("0")}>Resent</button>
            </div>

        </div>
    );
};

export default Count;