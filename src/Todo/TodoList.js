import React from "react";
import './TodoList.css';
import { Button, Container, Form, ListGroupItem, ListGroup,Row,Col, Tab, Nav } from "react-bootstrap";

export default function TodoList() {

    return (
        <Container>
            <header className="mt-5">
                <h2 className="text-center">Assignment 2 : Madhava's TodoList</h2>
            </header>
            <Container className="p-2">
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="item">
                        <Form.Label>Todo Item</Form.Label>
                        <Form.Control type="text" placeholder="Enter item"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add</Button>
                </Form>
                <Tab.Container activeKey="first">
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem ><Nav.Link eventKey="first">Item 1</Nav.Link></ListGroupItem>
                            <ListGroupItem ><Nav.Link eventKey="second">Item 2</Nav.Link> </ListGroupItem>
                            <ListGroupItem ><Nav.Link eventKey="third">Item 2</Nav.Link></ListGroupItem>
                        </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">First Item</Tab.Pane>
                                <Tab.Pane eventKey="second">Second Item</Tab.Pane>
                                <Tab.Pane eventKey="third">Third Item</Tab.Pane>
                            </Tab.Content>
                        
                        </Col>
                </Row>
                </Tab.Container>
            </Container>
        </Container>
    )
}