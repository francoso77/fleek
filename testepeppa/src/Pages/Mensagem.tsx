import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mensagem() {

    const irPara = useNavigate()

    const btNovo = () => {

        irPara("/CadastroProduto")
    }

    return (
        <>

            <h2>Produto cadastrado com sucesso!!</h2>
            <input type="button" value="Novo produto" onClick={btNovo} />

        </>
    )
}