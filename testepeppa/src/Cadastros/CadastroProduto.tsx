import React, { useContext, useState } from 'react'
import InputText from '../Components/InputText'
import { URL_SERVIDOR } from '../Config/Setup'
import { ProdutosInterface } from '../Interfaces/ProdutosInterface'
import { LoginContexto } from '../Layout/Layout'

export default function CadastroProduto() {

    const [rsProdutos, setRsProdutos] = useState<ProdutosInterface>({
        nome: '',
        descricao: '',
        categoria: '',
        valor: ''
    })

    const isLogado = useContext(LoginContexto).logado

    const btSalvar = () => {

        fetch(URL_SERVIDOR.concat('/produtos'), {
            body: JSON.stringify(rsProdutos),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        }).then(rs => {
            if (rs.status == 201) {

                alert("Produto Cadastrado!")
                setRsProdutos({
                    nome: '',
                    descricao: '',
                    categoria: '',
                    valor: ''
                })
            }

        })

    }

    return (

        <>
            <h1>Cadastro de Produto</h1>
            {!isLogado ?
                <>
                    <h1>Faça login</h1>
                </> :
                <>
                    <InputText
                        label='Nome: '
                        tipo='text'
                        valor={rsProdutos.nome}
                        id='txtNome'
                        placeholder='Nome do Produto'
                        dados={rsProdutos}
                        campo='nome'
                        setState={setRsProdutos}
                        valida='txt'
                    />
                    <InputText
                        label='Descrição: '
                        tipo='text'
                        valor={rsProdutos.descricao}
                        id='txtDescricao'
                        placeholder='Descrição do produto'
                        dados={rsProdutos}
                        campo='descricao'
                        setState={setRsProdutos}
                        valida='txt'
                    />
                    <InputText
                        label='Categoria: '
                        tipo='text'
                        valor={rsProdutos.categoria}
                        id='txtCategoria'
                        placeholder=''
                        dados={rsProdutos}
                        campo='categoria'
                        setState={setRsProdutos}
                        valida='txt'

                    />   <InputText
                        label='Valor: '
                        tipo='text'
                        valor={rsProdutos.valor}
                        id='txtValor'
                        placeholder=''
                        dados={rsProdutos}
                        campo='valor'
                        setState={setRsProdutos}
                        valida='txt'

                    />
                    <br />
                    <input
                        id='btSalvar'
                        type='Button'
                        value='Salvar'
                        onClick={btSalvar}

                    />
                </>}

        </>

    )
}