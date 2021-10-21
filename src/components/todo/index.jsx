import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { TodosContext } from '../../context/todos-context'

import { GoCheck, GoTrashcan } from "react-icons/go";

import './styles.css'

export const Todo = (props) => {

    const todosContext = useContext(TodosContext);

    const [isComplete, setIsComplete] = useState(false);

    // on init of component, when it first loads, grab the is complete property from the globabl state
    useEffect( () => {
        setIsComplete(props.isComplete)
    }, []);

    // everytime isComplete is updated, user clicks on the checkmark, call the below code
    useEffect( () => {
        todosContext.updateTodo(props.todoId, isComplete);
    }, [isComplete]);

    const toggleCompleteTodo = () => {
        setIsComplete (!isComplete);
    }

    const deleteTodo = () => {
        todosContext.deleteTodo(props.todoId);
    }
    
    return (
        <div className={`todo ${props.color}`} style={isComplete ? {opacity: 0.2} : {} }>

            <div>
                <p className="todo-text"> { props.text } </p>
                <p className="todo-date"> { props.date } </p>
            </div>

            <div className ="todo-btns">
                <button className="todo-complete" onClick = {toggleCompleteTodo}>
                    <GoCheck className = "todo-icon" style={{ fontSize: "35px "}}/>
                </button>
                <button className="todo-delete" onClick={deleteTodo}>
                    <GoTrashcan className="todo-icon" style={{ fontSize: "35px"}}/>
                </button>
            </div>
        </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string,
    priority: PropTypes.bool,
    isComplete: PropTypes.bool
}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}