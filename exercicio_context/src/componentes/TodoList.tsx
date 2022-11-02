import React from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {

    // const context = useContext(TodoContext)

    return (
        <TodoContext.Consumer>{
            ({ todo }) => {

                const lista = todo.map((todo) =>
                    <TodoListItem key={todo.id} todo={todo}></TodoListItem>

                )
                return (
                    <>
                        {lista}

                    </>
                )
            }
        }
        </TodoContext.Consumer>
    );
}
export default TodoList