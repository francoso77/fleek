import React, { useContext } from 'react'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import './Mensagem.css'

export default function Mensagem() {

    const {mensagemState, setMensagemState} = (useContext(ContextoGlobal) as GlobalStateInterface)
    
    const fecharJanela = () => {
        setMensagemState({
            exibir: false,
            mensagem: '',
            tipo: 'aviso'
        })
    }
    
    if (mensagemState.exibir){
        return (
            <>
                <div id="mensagem" className="modal">
                    <div className="modal-content">
                        <p>{mensagemState.mensagem}</p>
                        <span>
                            {(mensagemState.tipo === 'erro' || mensagemState.tipo === 'aviso') && 
                                <>
                                    <input
                                     type="button" 
                                     value="Fechar"
                                     onClick={fecharJanela}
                                     />
                                </>
                            }
                        </span>

                    </div>
                </div>
            </>
        )
    }else {

        return(<></>)
    }
}