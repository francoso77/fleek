import React from 'react'
import './InputButton.css'

export default function InputButton(
    {
        id,
        tipo,
        valor,
        action
    }:{
        id: string,
        tipo: string,
        valor: string
        action: string,
                
    }) {

    const btIncluir  = () => {

        //let vr: any = evento.target.value
    
    }    

    return (
        <>
            <input 
                className="InputButton"
                id= {id}
                type={tipo} 
                value={valor}
                onClick={btIncluir}
                
                
            />
        </>
    )
}