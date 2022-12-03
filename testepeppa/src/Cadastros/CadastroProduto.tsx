import React, { useContext, useEffect, useState } from 'react'
import InputText from '../Components/InputText'
import { URL_SERVIDOR } from '../Config/Setup'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import { ContextoGlobalInterface } from '../Interfaces/ContextoGlobalInterface'
import { ProdutosInterface } from '../Interfaces/ProdutosInterface'

export default function CadastroProduto() {

    const [rsProdutos, setRsProdutos] = useState<ProdutosInterface>({
        nome: '',
        descricao: '',
        categoria: '',
        valor: ''
    })

    const globalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    

    const x = useEffect( ()=>{
        document.getElementById('txtNome')?.focus()
    },[setRsProdutos])

    const btSalvar = () => {

        if (rsProdutos.nome &&
            rsProdutos.descricao &&
            rsProdutos.categoria &&
            rsProdutos.valor) {

            globalContexto.setMensagemModalState({
                exibir: true,
                mensagem: "incluindo produto ...",
                tipo: 'processo'
            })

            fetch(URL_SERVIDOR.concat('/produtos'), {
                body: JSON.stringify(rsProdutos),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then(rs => {
                if (rs.status === 201) {

                    setRsProdutos({
                        nome: '',
                        descricao: '',
                        categoria: '',
                        valor: ''
                    })

                    globalContexto.setMensagemModalState({
                        exibir: true,
                        mensagem: "Produto cadastrado com sucesso!",
                        tipo: 'aviso'
                    })
                    
                } else {

                    globalContexto.setMensagemModalState({
                        exibir: true,
                        mensagem: "Erro ao incluir o produto",
                        tipo: 'erro'
                    })
                }
            }).catch(() => {
                globalContexto.setMensagemModalState({
                    exibir: true,
                    mensagem: "Erro no servidor. Não foi possível fazer a inclusão!",
                    tipo: 'erro'
                })
            })
        }
    }

    return (

        <>
            <h1>Cadastro de Produto</h1>
            {!globalContexto.loginState.logado ?
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