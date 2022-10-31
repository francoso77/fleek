import React, { createContext, useState } from 'react';

export interface TodoInterface {
    id: number,
    title: string,
    done: boolean
}

export interface ContextTodoInterface {
    todo: Array<TodoInterface>,
    saveTodo: (title: string) => void,
    resetTodo: (title: number) => void
}

const ContextTodo: ContextTodoInterface = {
    todo: [],
    saveTodo: (title) => { },
    resetTodo: (id) => { }
}

export const TodoContext = createContext({ ...ContextTodo })

const TodoProvider = ({ children }: { children: any }) => {

    const [todos, SetTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false },
        { id: 2, title: 'Ir a farmácia', done: false },
        { id: 3, title: 'Buscar documsentos cartório', done: false }
    ])

    const saveTodo = (title: string) => {

        const newTodo = {
            id: todos.length + 1,
            title: title,
            done: false
        }

        SetTodos([...todos, newTodo])
    }
    const resetTodo = (id: number) => {

        if (!todos.includes({
            id: id,
            title: '',
            done: false
        })) {
            console.log('achou o item')
            console.log(todos.indexOf({
                id: id,
                title:'',
                done:false
            }))
            
            //SetTodos([...todos])
        } else {
            console.log('não achou ')
        }


        //SetTodos([...todos, newTodo])
    }
    return (
        <>
            <TodoContext.Provider
                value={{
                    todo: [...todos],
                    saveTodo: saveTodo,
                    resetTodo: resetTodo
                }}>
                {children}
            </TodoContext.Provider>
        </>
    );
}
export default TodoProvider