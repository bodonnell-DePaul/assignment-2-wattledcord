import React, {useEffect, useState} from "react";
import './TodoList.css';
import todos from "../todoItems";
import {Button, Col, Container, Form, ListGroup, Row, Tab} from "react-bootstrap";

export default function TodoList() {
    const [todolist, setTodoList] = useState([]);

    useEffect(() => {
        let todoList = todos.map((todo) => {
            return {
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,
                variant: getVariant(todo.dueDate)
            }
        });
        setTodoList(todoList);
    }, []);

    const getVariant = (dueDate) => {
        let date = new Date(dueDate);
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
            return 'primary';
        } else if (daysDiff > 4 && daysDiff <= 7) {
            return 'success';
        } else if (daysDiff > 2 && daysDiff <= 4) {
            return 'warning';
        } else {
            return 'danger';
        }
    }

    const listItems = todolist.map((todo, index) => {
        return (
            <ListGroup.Item action href={`#${index}`} key={index}
                            variant={getVariant(todo.dueDate)}>
                {todo.title}
            </ListGroup.Item>
        )
    });

    const handleDueDateCHange = (index) => event => {
        let value = event.target.value;
        console.log(value);
        let todoItem = todolist[index];
        todoItem.dueDate = value;
        let newTodoList = [...todolist];
        newTodoList[index] = todoItem;
        setTodoList(newTodoList);
    }

    const TabViewPanes = todolist.map((todo, index) => {
        return (
            <Tab.Pane eventKey={`#${index}`} key={index}>
                <p contentEditable="true">{todo.description}</p>
                <Form.Control type="date" placeholder="Enter Date" value={todo.dueDate}
                              onChange={handleDueDateCHange(index)}></Form.Control>
            </Tab.Pane>
        )
    });
    return (
        <Container>
            <header className="mt-5">
                <h2 className="text-center">Assignment 2 : Madhava's TodoList</h2>
            </header>
            <Container className="p-2">
                <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="item">
                        <Form.Label column="lg">ToDo Item</Form.Label>
                        <Form.Control type="text" placeholder="Add todo item"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label column="lg">Due Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date"></Form.Control>
                    </Form.Group>
                    <div className="d-grid">
                        <Button variant="primary" type="submit">Add Todo</Button>
                    </div>

                </Form>
                <Tab.Container defaultActiveKey="#0">
                    <Row>
                        <Col>
                            <ListGroup>
                                {
                                    listItems
                                }
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                {
                                    TabViewPanes
                                }
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Container>
    )
}