import React from 'react';
import { TodoInterface } from '../context/TodoContext';



const TodoListItem = ({ todo }: { todo: TodoInterface }) => {
   
    return (
        /*<>
            <table className='tabelaDados'>

                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.done ? "true" : "false"}</td>
                    <td>
                        <i className="material-icons botaoAcao" onClick={teste}>close</i>
                        <i className="material-icons botaoAcao">edit</i>
                    </td>
                </tr>

            </table>
        </>*/



         
        <li>
            {todo.id} - {todo.title} - {todo.done ? "true" : "false"}
        
        </li>
        
    );
}

export default TodoListItem