import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { BsCheckCircle, BsExclamationCircle, BsXCircle } from 'react-icons/bs';


const status = () => {
    document.body.style.background = 'black';
    
    
    return (
        <>
        
        <div style={{ textAlign: 'center', margin: '25px' }}>
            <h1 style={{ fontSize: '30pt', color: 'white' }}>Subway Status</h1>
        </div>
        
        <Container>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#00afdd' }}><strong>Station A</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>Status: <BsCheckCircle style={{ color: 'green', fontSize: '25px', position: 'relative', top: '-2'}}/> Normal<br></br></strong> 
                                <strong>Description: </strong> <br></br>On time without delays.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#e6362a' }}><strong>Station B</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>Status: <BsExclamationCircle style={{ color: '#ffd100', fontSize: '25px', position: 'relative', top: '-2'}}/> Delayed<br></br></strong> 
                                <strong>Description: </strong> <br></br>Delayed 20 min by weather conditions. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#0f68ae' }}><strong>Station C</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>Status: <BsCheckCircle style={{ color: 'green', fontSize: '25px', position: 'relative', top: '-2'}}/> Normal<br></br></strong> 
                                <strong>Description: </strong>  <br></br>On time without delays.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#007b62' }}><strong>Station D</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>Status: <BsExclamationCircle style={{ color: '#ffd100', fontSize: '25px', position: 'relative', top: '-2'}}/> Delayed<br></br></strong> 
                                <strong>Description: </strong> <br></br> Delayed by technical issues without estimated time. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#7d2582' }}><strong>Station E</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                 <strong>Status: <BsExclamationCircle style={{ color: '#ffd100', fontSize: '25px', position: 'relative', top: '-2'}}/> Delayed<br></br></strong> 
                                <strong>Description: </strong> <br></br>Delayed 40 min by weather conditions. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card style={{ margin: '10px'}}>
                        <Card.Header style={{ backgroundColor: '#ffd100' }}><strong>Station H</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>Status: <BsXCircle style={{ color: '#e6362a', fontSize: '25px', position: 'relative', top: '-2'}}/> Stopped<br></br></strong> 
                                <strong>Description: </strong> <br></br>Service line is stopped by technical issues.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default status;