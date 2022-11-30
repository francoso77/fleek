import React, { useState } from 'react';
import { TodoContext } from '../context/TodoContext';


const AddTodo = () =>{
    const [todoLocal, setTodoLocal] = useState<string>('')

    return (
        <TodoContext.Consumer>{
            ({ saveTodo, resetTodo, feitoTodo}) => {

                

                const handleFormSubmit = (e: any) => {
                    e.preventDefault()
                    saveTodo(todoLocal)
                }
                const handleFormReset = (e: any) => {
                    e.preventDefault()
                    resetTodo(parseInt(todoLocal))
                }
                const handleInputChange = (e: any) => {
                    setTodoLocal(e.target.value)
                }

                const feito = (e: any) =>{
                    e.preventDefault()
                    feitoTodo(parseInt(todoLocal))
                }
                return (
                    <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                        <input 
                            type="text" 
                            name="title" 
                            id="title"  
                            placeholder='Nova tarefa ...'    
                            onChange={handleInputChange} 
                        />
                        <button id="btAdicionar">ADICIONAR</button>
                        <button type="reset">EXCLUIR</button>
                        <input type="button" value="FEITO" onClick={feito} />
                    </form>
                )
            }
        }
        </TodoContext.Consumer>
    );
}

export default AddTodo


