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
    
    if (globalContexto.temProdutosState.temProduto) {
        
        fetch(URL_SERVIDOR.concat('/produtos/').concat(globalContexto.temProdutosState.id?.toString()), {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        }).then(rs => {
            if (rs.ok) {
                
                return rs.json()

            } else {

                globalContexto.setMensagemModalState({
                    exibir: true,
                    mensagem: "Erro ao encontrar o produto",
                    tipo: 'erro'
                })
            }
        }).then ( dadosProdutos => {
            
            
            setRsProdutos(dadosProdutos)            

        }).catch(() => {
            globalContexto.setMensagemModalState({
                exibir: true,
                mensagem: "Erro no servidor. Não foi possível encontrar o produto!",
                tipo: 'erro'
            })
        })
        
    }

    //const x = useEffect(() => {
    //    document.getElementById('txtNome')?.focus()
    //}, [setRsProdutos])

    const btSalvar = () => {

        if (rsProdutos.nome &&
            rsProdutos.descricao &&
            rsProdutos.categoria &&
            rsProdutos.valor &&
            !globalContexto.temProdutosState.temProduto) {

            globalContexto.setMensagemModalState({
                exibir: true,
                mensagem: "Incluindo o produto ...",
                tipo: 'processo'
            })

            fetch(URL_SERVIDOR.concat('/produtos'), {
                body: JSON.stringify(rsProdutos),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then(rs => {
                if (rs.ok) {

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
        }else if(rsProdutos.nome &&
            rsProdutos.descricao &&
            rsProdutos.categoria &&
            rsProdutos.valor &&
            globalContexto.temProdutosState.temProduto) {

                globalContexto.setMensagemModalState({
                    exibir: true,
                    mensagem: "Alterando o produto ...",
                    tipo: 'processo'
                })
    
                fetch(URL_SERVIDOR.concat('/produtos/').concat(globalContexto.temProdutosState.id.toString()), {
                    body: JSON.stringify(rsProdutos),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT'
                }).then(rs => {
                    setRsProdutos({
                        nome: '',
                        descricao: '',
                        categoria: '',
                        valor: ''
                    })
                    if (rs.ok) {
                        console.log('rsProdutos antes: ', rsProdutos)
                        setRsProdutos({
                            nome: '',
                            descricao: '',
                            categoria: '',
                            valor: ''
                        })
                        globalContexto.setMensagemModalState({
                            exibir: true,
                            mensagem: "Produto alterado com sucesso!",
                            tipo: 'aviso'
                        })

                        globalContexto.setTemProdutosState({temProduto: false, id: -1})
                        setRsProdutos({
                            nome: '',
                            descricao: '',
                            categoria: '',
                            valor: ''
                        })
                        console.log('rsProdutos antes: ', rsProdutos)
                    } else {
                        globalContexto.setMensagemModalState({
                            exibir: true,
                            mensagem: "Erro ao alterar o produto",
                            tipo: 'erro'
                        })
                    }
                }).catch(() => {
                
                    globalContexto.setMensagemModalState({
                        exibir: true,
                        mensagem: "Erro no servidor. Não foi possível fazer a alteração!",
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
                        value={globalContexto.temProdutosState.temProduto ? 'Alterar' : 'Incluir'}
                        onClick={btSalvar}

                    />
                </>}

        </>

    )
}