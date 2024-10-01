import React, {useEffect, useState} from "react";
import './TodoList.css';
import todos from "../todoItems";
import {Button, Container, Form, ListGroup, Row, Col, Tab} from "react-bootstrap";

export default function TodoList() {
    const [todolist, setTodoList] = useState([]);

    useEffect(() => {
        const todoList = todos.map((todo) => {
            let todoVar = {
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,

            };
            let date = new Date(todo.dueDate);
            let currentDate = new Date();
// Convert dates to UTC timestamps
            let utc1 =
                Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
            let utc2 =
                Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

// Calculate the time difference in milliseconds
            let timeDiff = Math.abs(utc1 - utc2);

// Convert milliseconds to days
            let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            if (daysDiff > 7) {
                todoVar['variant'] = 'primary';
            } else if (daysDiff > 4 && daysDiff <= 7) {
                todoVar['variant'] = 'success';
            } else if (daysDiff > 2 && daysDiff <= 4) {
                todoVar['variant'] = 'warning';
            } else {
                todoVar['variant'] = 'danger';
            }
            return todoVar;
        });
        setTodoList(todoList);
    }, []);

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
                    <div className="d-grid">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>

                </Form>
                <Tab.Container defaultActiveKey="#1">
                    <Row>
                        <Col>
                            <ListGroup>
                                {
                                    todolist.map((todo, index) => {
                                        return (
                                            <ListGroup.Item action href={`#${index}`} key={index} variant={todo.variant}>
                                                {todo.title}
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                {
                                    todolist.map((todo, index) => {
                                        return (
                                            <Tab.Pane eventKey={`#${index}`} key={index}>
                                                <p>{todo.description}</p>
                                                <p>{todo.dueDate}</p>
                                            </Tab.Pane>
                                        )
                                    })
                                }
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Container>
    )
}