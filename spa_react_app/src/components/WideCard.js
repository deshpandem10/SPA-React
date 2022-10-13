import React, { Component } from 'react';

import  { 
    Card,
    Row,
    Col
} from 'react-bootstrap';

import '../assets/scss/card.scss';

const WideCard = (props) => {
    return (
        <Card className="wideCard">
            <Card.Body>
                <Row>
                    <Col lg={8} className='order-2 order-lg-1'>
                        <p>
                            {props.text}
                        </p>
                    </Col>
                    <Col className='order-1 order-lg-2'>
                        <div className='imgwrp'>
                            <img src={props.image} className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default WideCard;