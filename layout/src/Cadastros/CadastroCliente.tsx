import React from 'react'
import { useParams } from 'react-router-dom'
import { LoginContexto } from '../Layout/Layout'

export default function CadastroCliente() {

    const { idCliente } = useParams()
    return (

        <LoginContexto.Consumer>
            {({nome,updateLogin,logado}) => <>
                <h1>Cadastro de Cliente {idCliente} </h1>
                {logado && <h3>Bem vindo ... {nome}</h3>} 
                <input type="button" value="Alterar Usuário" onClick={() => updateLogin(true, 'Frank')} />
            </>}
        </LoginContexto.Consumer>

    )
}