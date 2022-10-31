import React from 'react';
import { TodoInterface } from '../context/TodoContext';

const TodoListItem = ({ todo }: { todo: TodoInterface }) => {
    return (
        <li>
            {todo.id} - {todo.title} - {todo.done ? "true" : "false"}
            
        </li>
    );
}

export default TodoListItem