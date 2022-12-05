import React, { useContext } from 'react'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'

export default function Footer() {

    const nomeLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.nome
    return (
        <>
            <span className='footer'>{nomeLogado}</span>
        </>
    )
}