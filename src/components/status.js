import React from "react";


const status = () => {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    
    return (
        <div style={{ textAlign: 'center', padding: '25px'}}>
            <h1 style={{ fontSize : '60pt'}}>Subway Status</h1>
        </div>
    );
}

export default status;