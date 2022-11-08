import React, { createContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import { createTextSpanFromBounds } from 'typescript';

export interface TodoInterface {
    id: number,
    title: string,
    done: boolean
}

export interface ContextTodoInterface {
    todo: Array<TodoInterface>,
    saveTodo: (title: string) => void,
    resetTodo: (title: number) => void,
    feitoTodo: (title: number) => void
}

const ContextTodo: ContextTodoInterface = {
    todo: [],
    saveTodo: (title) => { },
    resetTodo: (id) => { },
    feitoTodo: (id) => { },
}

export const TodoContext = createContext({ ...ContextTodo })

const TodoProvider = ({ children }: { children: any }) => {

    const [todos, SetTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false },
        { id: 2, title: 'Ir a farmácia', done: false },
        { id: 3, title: 'Buscar documentos cartório', done: false }
    ])

    const saveTodo = (title: string) => {

        const newTodo = {
            id: todos.length + 1,
            title: title,
            done: false
        }

        SetTodos([...todos, newTodo])
    }

    const resetTodo = (idRecebido: number) => {
        
        todos.forEach((todo, i) => {
            if (todo.id === idRecebido) {
                todos.splice(i,1)
                SetTodos([...todos])
            }else {
                if(todo.id === idRecebido && todos.length === 1){
                    SetTodos([])
                }
            }
        })
    }

    const feitoTodo = (idRecebido: number) => {
        
        todos.forEach((todo, i) => {
            if (todo.id === idRecebido && todo.done === false) {
                todo.done = true
                todo.title = todo.title.toLowerCase()
                SetTodos([...todos])
            }
        })

    }

    return (
        <>
            <TodoContext.Provider
                value={{
                    todo: [...todos],
                    saveTodo: saveTodo,
                    resetTodo: resetTodo,
                    feitoTodo: feitoTodo
                }}>
                {children}
               
            </TodoContext.Provider>
        </>
    );
}
export default TodoProvider