import React from "react";
import FormSelect from "react-bootstrap/esm/FormSelect";
import Card from "react-bootstrap/esm/Card"
import Countdown from "react-countdown";

const arrive = () => {
    document.body.style.background = 'black';

    const current = new Date();
    const date = `${current.getHours().toString().padStart(2,'0')}:${current.getMinutes().toString().padStart(2,'0')}:${current.getSeconds().toString().padStart(2,'0')}`;
     
    return (
        <>
            <div style={{ textAlign: 'center', margin: '25px' }}>
                <h1 style={{ fontSize: '30pt', color: 'white' }}>Subway Estimated Arrive Time by Station</h1>
            </div>

            <FormSelect style={{ maxWidth: '500px', width: '90%', textAlign: 'center', margin: 'auto', padding: '5px' }} aria-label="Default select example">
                <option>Please select the station</option>
                <option value='Línea A - Acoyte' selected>Línea A - Acoyte</option>
                <option value='Línea A - Alberti'>Línea A - Alberti</option>
                <option value='Línea A - Carabobo'>Línea A - Carabobo</option>
                <option value='Línea A - Castro Barros'>Línea A - Castro Barros</option>
                <option value='Línea A - Congreso'>Línea A - Congreso</option>
                <option value='Línea A - Lima'>Línea A - Lima</option>
                <option value='Línea A - Loria'>Línea A - Loria</option>
                <option value='Línea A - Pasco'>Línea A - Pasco</option>
                <option value='Línea A - Perú'>Línea A - Perú</option>
                <option value='Línea A - Piedras'>Línea A - Piedras</option>
                <option value='Línea A - Plaza de Mayo'>Línea A - Plaza de Mayo</option>
                <option value='Línea A - Plaza Miserere'>Línea A - Plaza Miserere</option>
                <option value='Línea A - Primera Junta'>Línea A - Primera Junta</option>
                <option value='Línea A - Puan'>Línea A - Puan</option>
                <option value='Línea A - Río de Janeiro'>Línea A - Río de Janeiro</option>
                <option value='Línea A - Sáenz Peña'>Línea A - Sáenz Peña</option>
                <option value='Línea A - San José de Flores'>Línea A - San José de Flores</option>
                <option value='Línea A - San Pedrito'>Línea A - San Pedrito</option>
                <option value='Línea B - Ángel Gallardo'>Línea B - Ángel Gallardo</option>
                <option value='Línea B - Callao'>Línea B - Callao</option>
                <option value='Línea B - Carlos Gardel'>Línea B - Carlos Gardel</option>
                <option value='Línea B - Carlos Pellegrini'>Línea B - Carlos Pellegrini</option>
                <option value='Línea B - De los Incas - Parque Chas'>Línea B - De los Incas - Parque Chas</option>
                <option value='Línea B - Dorrego'>Línea B - Dorrego</option>
                <option value='Línea B - Echeverría'>Línea B - Echeverría</option>
                <option value='Línea B - Federico Lacroze'>Línea B - Federico Lacroze</option>
                <option value='Línea B - Florida'>Línea B - Florida</option>
                <option value='Línea B - Juan Manuel de Rosas - Villa Urquiza'>Línea B - Juan Manuel de Rosas - Villa Urquiza</option>
                <option value='Línea B - Leandro N. Alem'>Línea B - Leandro N. Alem</option>
                <option value='Línea B - Malabia - Osvaldo Pugliese'>Línea B - Malabia - Osvaldo Pugliese</option>
                <option value='Línea B - Medrano - Almagro'>Línea B - Medrano - Almagro</option>
                <option value='Línea B - Pasteur - AMIA'>Línea B - Pasteur - AMIA</option>
                <option value='Línea B - Pueyrredón'>Línea B - Pueyrredón</option>
                <option value='Línea B - Tronador - Villa Ortúzar'>Línea B - Tronador - Villa Ortúzar</option>
                <option value='Línea B - Uruguay'>Línea B - Uruguay</option>
                <option value='Línea C - Avenida de Mayo'>Línea C - Avenida de Mayo</option>
                <option value='Línea C - Constitución'>Línea C - Constitución</option>
                <option value='Línea C - Diagonal Norte'>Línea C - Diagonal Norte</option>
                <option value='Línea C - General San Martín'>Línea C - General San Martín</option>
                <option value='Línea C - Independencia'>Línea C - Independencia</option>
                <option value='Línea C - Lavalle'>Línea C - Lavalle</option>
                <option value='Línea C - Moreno'>Línea C - Moreno</option>
                <option value='Línea C - Retiro'>Línea C - Retiro</option>
                <option value='Línea C - San Juan'>Línea C - San Juan</option>
                <option value='Línea D - 9 de Julio'>Línea D - 9 de Julio</option>
                <option value='Línea D - Agüero'>Línea D - Agüero</option>
                <option value='Línea D - Bulnes'>Línea D - Bulnes</option>
                <option value='Línea D - Callao'>Línea D - Callao</option>
                <option value='Línea D - Catedral'>Línea D - Catedral</option>
                <option value='Línea D - Congreso de Tucumán'>Línea D - Congreso de Tucumán</option>
                <option value='Línea D - Facultad de Medicina'>Línea D - Facultad de Medicina</option>
                <option value='Línea D - José Hernández'>Línea D - José Hernández</option>
                <option value='Línea D - Juramento'>Línea D - Juramento</option>
                <option value='Línea D - Ministro Carranza'>Línea D - Ministro Carranza</option>
                <option value='Línea D - Olleros'>Línea D - Olleros</option>
                <option value='Línea D - Palermo'>Línea D - Palermo</option>
                <option value='Línea D - Plaza Italia'>Línea D - Plaza Italia</option>
                <option value='Línea D - Pueyrredón'>Línea D - Pueyrredón</option>
                <option value='Línea D - Scalabrini Ortiz'>Línea D - Scalabrini Ortiz</option>
                <option value='Línea D - Tribunales - Teatro Colón'>Línea D - Tribunales - Teatro Colón</option>
                <option value='Línea E - Avenida La Plata'>Línea E - Avenida La Plata</option>
                <option value='Línea E - Belgrano'>Línea E - Belgrano</option>
                <option value='Línea E - Boedo'>Línea E - Boedo</option>
                <option value='Línea E - Bolívar'>Línea E - Bolívar</option>
                <option value='Línea E - Catalinas'>Línea E - Catalinas</option>
                <option value='Línea E - Correo Central'>Línea E - Correo Central</option>
                <option value='Línea E - Emilio Mitre'>Línea E - Emilio Mitre</option>
                <option value='Línea E - Entre Ríos - Rodolfo Walsh'>Línea E - Entre Ríos - Rodolfo Walsh</option>
                <option value='Línea E - General Urquiza'>Línea E - General Urquiza</option>
                <option value='Línea E - Independencia'>Línea E - Independencia</option>
                <option value='Línea E - José María Moreno'>Línea E - José María Moreno</option>
                <option value='Línea E - Jujuy'>Línea E - Jujuy</option>
                <option value='Línea E - Medalla Milagrosa'>Línea E - Medalla Milagrosa</option>
                <option value='Línea E - Pichincha'>Línea E - Pichincha</option>
                <option value='Línea E - Plaza de los Virreyes - Eva Perón'>Línea E - Plaza de los Virreyes - Eva Perón</option>
                <option value='Línea E - Retiro'>Línea E - Retiro</option>
                <option value='Línea E - San José'>Línea E - San José</option>
                <option value='Línea E - Varela'>Línea E - Varela</option>
                <option value='Línea H - Caseros'>Línea H - Caseros</option>
                <option value='Línea H - Córdoba'>Línea H - Córdoba</option>
                <option value='Línea H - Corrientes'>Línea H - Corrientes</option>
                <option value='Línea H - Facultad de Derecho - Julieta Lanteri'>Línea H - Facultad de Derecho - Julieta Lanteri</option>
                <option value='Línea H - Hospitales'>Línea H - Hospitales</option>
                <option value='Línea H - Humberto I'>Línea H - Humberto I</option>
                <option value='Línea H - Inclán - Mezquita Al Ahmad'>Línea H - Inclán - Mezquita Al Ahmad</option>
                <option value='Línea H - Las Heras'>Línea H - Las Heras</option>
                <option value='Línea H - Once - 30 de Diciembre'>Línea H - Once - 30 de Diciembre</option>
                <option value='Línea H - Parque Patricios'>Línea H - Parque Patricios</option>
                <option value='Línea H - Santa Fe - Carlos Jáuregui'>Línea H - Santa Fe - Carlos Jáuregui</option>
                <option value='Línea H - Venezuela'>Línea H - Venezuela</option>
            </FormSelect>

            <Card border="info" style={{ width: '20rem', margin: 'auto', marginTop: '50px' }}>
                <Card.Header style={{ backgroundColor: 'darkturquoise'}}><strong>Station Name</strong></Card.Header>
                <Card.Body>
                <Card.Title>Next Subway</Card.Title>    
                <Card.Text> 
                    <strong>Actual Time: </strong> { date }  <br></br>
                    <strong>Remining: </strong> <Countdown date={Date.now()+180000}></Countdown>
                </Card.Text>
                </Card.Body>
            </Card>
            
        </>

    );
}

export default arrive;