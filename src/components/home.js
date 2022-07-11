import React from "react";
import Image from 'react-bootstrap/Image';

const home = () => {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    
    return (
        <div style={{ textAlign: 'center', margin: '50px'}}>
            <h1 style={{ fontSize : '30pt'}}>Welcome to Subte APP</h1>
            <Image rounded='true' src="http://www.buenosaires.gob.ar/sites/gcaba/files/mapa_de_red.png" style={{ maxWidth: '1500px', width: '100%', marginTop: '50px' }}></Image>
        </div>
    );
}

export default home;