import React from 'react';
import './Split.css';
export default Split;


function Split(props) {
    const combinedClassName = `split ${props.className}`
    return (
        <div className={combinedClassName}>
        {props.children}
        </div> 
    );
    
}

