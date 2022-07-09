import React from "react";

const home = () => {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    
    return (
        <div style={{ textAlign: 'center', padding: '100px'}}>
            <h1 style={{ fontSize : '60pt'}}>Welcome to Subte APP</h1>
        </div>
    );
}

export default home;