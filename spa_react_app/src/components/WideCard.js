import React, { Component } from 'react';

import  { Card, Button } from 'react-bootstrap';

class WideCard extends Component {
    render () {
        function handleCardClick() {
            console.log('you clicked a card');
        }

        return (
            <Card className="mini-card" onClick={handleCardClick}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default WideCard;