import React from 'react';
import first from "../../image/logo.png"
import Count from "../Count";
const Block = (img) => {
    return (
        <div className="container">
      <div className="block">
            <h1>my block</h1>
            <p>paragraph</p>
            <button>button</button>
            <img src={first} alt="img"/>
          <Count/>
      </div>
        // </div>
    );
};

export default Block;