import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

import './scss/home.scss';

class Home extends Component {
    render() {

        function handleCardClick() {
            console.log('you clicked a card');
        }

        return (
            <div className="container">
                <h1>This is Home page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros sapien, laoreet nec ligula quis, gravida accumsan nulla. 
                    Vivamus aliquam porta viverra. Duis mattis mi non sem cursus faucibus. Sed nec nunc eget purus dignissim commodo a at turpis. 
                    Nullam sodales est ut eros rhoncus, ut volutpat sapien dapibus. Nunc fringilla facilisis urna, a aliquet enim consequat vel. 
                </p>
                <p>
                    Aliquam vel scelerisque est. Maecenas blandit tellus sed risus pretium viverra. Vestibu
                </p>

                <div className="d-flex card-set mt-5">
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
                    <Card className="mini-card">
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
                </div>
                <div className="d-flex card-set mt-5">
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
                    <Card className="mini-card">
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
                </div>
                <div className="d-flex card-set mt-5">
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
                    <Card className="mini-card">
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
                </div>
                <div className="d-flex card-set mt-5">
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
                    <Card className="mini-card">
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
                </div>
            </div>
        );
    }
}

export default Home;