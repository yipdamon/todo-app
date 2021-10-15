import "./styles.css";
import { Todo } from "../../todo/index";

export const AllTodosPage = () => {

    const todos = [
        {text: "Walk my dog", date: "10/10/2021", color: "blue", isComplete: false },
        {text: "Go workout", date: "10/10/2021", color: "red", isComplete: false },
        {text: "Do assignment", date: "10/10/2021", color: "red", isComplete: true },
    ];

    return (
        <div className = "todos-container">
            { todos.map ((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} />) }
        </div>
    )
}

// export const AllTodosPage = () => {
//     return (
//         <div>
//             <Todo
//                 text="Walk my dog" date="10/10/2021" color ="blue" 
//             />

//             <Todo
//                 text="Buy laundry detergent" date="10/10/2021" color ="blue" 
//             >
//             </Todo>

//             <Todo
//                 text="Go workout :)" date="10/10/2021" color ="blue" 
//             >
//             </Todo>
//         </div>
//     )
// }