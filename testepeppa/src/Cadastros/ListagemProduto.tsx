import React, { useContext, useState } from 'react'
import { isJSDocReadonlyTag } from 'typescript'
import InputText from '../Components/InputText'
import { URL_SERVIDOR } from '../Config/Setup'
import { ContextoGlobal } from '../Contexto/ContextoGlobal'
import { ContextoGlobalInterface } from '../Interfaces/ContextoGlobalInterface'
import { PesquisaInterface } from '../Interfaces/PesquisaInterface'
import { ProdutosInterface } from '../Interfaces/ProdutosInterface'

import './ListagemProduto.css'

export default function ListagemProdutos() {

    const [rsPesquisa, setRsPesquisa] = useState<Array<ProdutosInterface>>([])

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const globalContexto = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    const btPesquisar = () => {

        if (pesquisa.nome) {

            globalContexto.setMensagemModalState({
                exibir: true,
                mensagem: "Pesquisando produto ...",
                tipo: 'processo'
            })

            fetch(URL_SERVIDOR.concat('/produtos?nome=').concat(pesquisa.nome), {

                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }).then(rs => {
                if (rs.status === 200) {

                    setPesquisa({ nome: '' })

                    globalContexto.setMensagemModalState({
                        exibir: false,
                        mensagem: "",
                        tipo: 'aviso'
                    })
                    return rs.json()
                } else {

                    globalContexto.setMensagemModalState({
                        exibir: true,
                        mensagem: "Erro na pesquisa do produto",
                        tipo: 'erro'
                    })
                }
            }).then(rsProdutos => {

                setRsPesquisa(rsProdutos)

            }).catch(() => {
                globalContexto.setMensagemModalState({
                    exibir: true,
                    mensagem: "Erro no servidor. Não foi possível pesuisar o produto!",
                    tipo: 'erro'
                })
            })
        }
    }
    const btExcluir = (i: any) =>{
                        
        globalContexto.setMensagemModalState({
            exibir: true,
            mensagem: "Excluindo produto ...",
            tipo: 'processo'
        })
        console.log(URL_SERVIDOR.concat('/produtos?id=').concat(i))

        fetch(URL_SERVIDOR.concat('/produtos?id=').concat(i), {
            body: null,
            headers: {
                'Accept': 'application/json',
            },
            method: 'DELETE'
        }).then(rs => {
            console.log ('status ',rs )
            if (rs.ok) {

                setPesquisa({ nome: '' })

                globalContexto.setMensagemModalState({
                    exibir: false,
                    mensagem: "",
                    tipo: 'aviso'
                })
                return rs.json()
            } else {

                globalContexto.setMensagemModalState({
                    exibir: true,
                    mensagem: "Erro na exclusão do produto",
                    tipo: 'erro'
                })
            }
        }).then(rsProdutos => {

            setRsPesquisa(rsProdutos)

        }).catch(() => {
            globalContexto.setMensagemModalState({
                exibir: true,
                mensagem: "Erro no servidor. Não foi possível excluir o produto!",
                tipo: 'erro'
            })
        })
    }
    return (
        <>
            <h1>Listagem de Produtos</h1>
            {globalContexto.loginState.logado &&
                <>
                    <InputText
                        label='Pesquisa: '
                        tipo='text'
                        valor={pesquisa.nome}
                        id='txtPesquisa'
                        placeholder='Nome do Produto'
                        dados={pesquisa}
                        campo='nome'
                        setState={setPesquisa}
                        valida='txt'
                    />
                    <input
                        id="btPesquisar"
                        type="button"
                        value="Pesquisar"
                        onClick={btPesquisar}
                    />

                    <div className='tabela'>
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                            {rsPesquisa.map((dadosProdutos, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{dadosProdutos.id}</td>
                                        <td>{dadosProdutos.nome}</td>
                                        <td>{dadosProdutos.descricao}</td>
                                        <td>{dadosProdutos.categoria}</td>
                                        <td>{dadosProdutos.valor}</td>
                                        <td>
                                        <i className="material-icons botaoAcao" onClick={() => btExcluir(dadosProdutos.id)}>close</i>
                                        <i className="material-icons botaoAcao" >edit</i>
                                        </td>
                                    </tr>)
                            })}
                        </table>
                    </div>
                </>}

        </>
    )
}