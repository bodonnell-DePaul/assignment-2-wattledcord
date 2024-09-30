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
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add</Button>
                </Form>
                <Tab.Container defaultActiveKey="#first">
                <Row>
                    <Col>
                        <ListGroup>
                           <ListGroup.Item action href="#first">First</ListGroup.Item>
                           <ListGroup.Item action href="#second">second</ListGroup.Item>
                           <ListGroup.Item action href="#third">third</ListGroup.Item>
                           <ListGroup.Item action href="#fourth">fourth</ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#first">First Item</Tab.Pane>
                                <Tab.Pane eventKey="#second">Second Item</Tab.Pane>
                                <Tab.Pane eventKey="#third">Third Item</Tab.Pane>
                                <Tab.Pane eventKey="#fourth">Fourth Item</Tab.Pane>
                            </Tab.Content>
                        </Col>
                </Row>
                </Tab.Container>
            </Container>
        </Container>
    )
}