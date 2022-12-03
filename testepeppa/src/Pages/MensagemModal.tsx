import React, { useContext } from "react";
import { ContextoGlobal } from "../Contexto/ContextoGlobal";
import { ContextoGlobalInterface } from "../Interfaces/ContextoGlobalInterface";

import './MensagemModal.css'

export default function MensagemModal (){

    const {mensagemModalState, setMensagemModalState} = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    const fecharMsg = () =>{
        
        setMensagemModalState ({
            exibir: false,
            mensagem: '',
            tipo: 'aviso'
        })
    }

    if (mensagemModalState.exibir){

        return (

            <>
                <div className="modal">
                    <div className="modal-content">
                        <p>{mensagemModalState.mensagem}</p>
                        <span>
                            {(mensagemModalState.tipo == 'erro' || mensagemModalState.tipo == 'aviso') &&
                            
                                <>
                                    <input 
                                        type="button" 
                                        value="Fechar" 
                                        onClick={fecharMsg}    
                                    />
                                </>
                            }
                        </span>
                    </div>
                </div>
            </>
        )
    } else {
        return (<></>)
    }
}