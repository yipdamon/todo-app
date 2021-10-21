import React, {useState} from 'react';

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

export const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    // deleteTodo
    const deleteTodo = (todoId) => {
        let oldTodos = todos;

        // find index location by the id property
        const todoIndex = todos.findIndex ( 
            (todo) =>{
                return (todo.id === todoId)
            }
        );

        // delete one item from the todos using its location, splicing it
        if (todoIndex !== -1){
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos]);
        }
    }

    // updateTodo
    const updateTodo = (todoId, isComplete) => {
        let oldTodos = todos;

        // find index location by the id property
        const todoIndex = todos.findIndex ( 
            (todo) =>{
                return (todo.id === todoId)
            }
        );

        if (todoIndex !== -1){
            // Update one item by index location in array
            oldTodos[todoIndex].isComplete = isComplete;

            // Update our todos
            setTodos(oldTodos);
        }
    }

    return (
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )


} 