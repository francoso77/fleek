import React from 'react'
import { LoginContexto } from '../Layout/Layout'

export default function ListagemProdutos(){
    return (

        <LoginContexto.Consumer>
            {({nome, updateLogin,logado}) => <>
                <h1>Listagem de Produtos</h1>
                {logado && <h3>Bem vindo .... {nome}</h3>}
            </>}
        </LoginContexto.Consumer>

    )
}