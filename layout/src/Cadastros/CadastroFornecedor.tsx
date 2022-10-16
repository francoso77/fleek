import React from 'react'
import { LoginContexto } from '../Layout/Layout'

export default function CadastroFornecedor(){
    return (

        <LoginContexto.Consumer>
            {({nome, updateLogin,logado}) => <>
                <h1>Cadastro de Fornecedor</h1>
                {logado && <h3>Bem vindo .... {nome}</h3>}
            </>}
        </LoginContexto.Consumer>

    )
}