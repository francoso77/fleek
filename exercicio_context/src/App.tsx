import React from 'react';
import AddTodo from './componentes/AddTodo';
import TodoList from './componentes/TodoList';
import TodoProvider from './context/TodoContext';

export default function App() {

    return (


            <TodoProvider>
                <h1>Minhas Tarefas</h1>
                <TodoList />
                <br />
                <hr />
                <br />
                <AddTodo />
            </TodoProvider>

   )
}

