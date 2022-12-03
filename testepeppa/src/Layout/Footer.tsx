import React, { useContext } from 'react'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import { ContextoGlobalInterface } from '../Interfaces/ContextoGlobalInterface'
import "./Footer.css"

export default function Footer() {

    const globalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    return (
        <>
            
                {(globalContexto.loginState.logado) &&

                    <span className='footer'>{globalContexto.mensagemModalState.mensagem}</span>
                }
            
        </>
    )
}