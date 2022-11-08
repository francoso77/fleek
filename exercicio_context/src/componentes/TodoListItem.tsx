import React from 'react';
import { TodoInterface } from '../context/TodoContext';



const TodoListItem = ({ todo }: { todo: TodoInterface }) => {
   
    return (
    
        <li>
            {todo.id} 
            - {todo.done ? todo.title.toLowerCase(): todo.title.toUpperCase()} 
            - {todo.done ? "true" : "false"}
        
        </li>
        
    );
}

export default TodoListItem