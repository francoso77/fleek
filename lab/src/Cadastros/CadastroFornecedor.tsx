import React, { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR3006 } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { AcaoStateInterface } from '../Interfaces/AcaoStateInterface';
import { FornecedoresInterface } from '../Interfaces/FornecedoresInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { PesquisaInterface } from '../Interfaces/PesquisaInterface';


const TEMPO_PADRAO_DELAY: number = 500

export default function CadastroFornecedor() {

    const [rsFornecedor, setRsFornecedor] = useState<FornecedoresInterface>({
        idFornecedor: 0,
        fornecedor: '',
        cnpj: ''
    })

    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const [rsPesquisa, setRsPesquisa] = useState<Array<FornecedoresInterface>>([])

    const [acaoState, setAcaoState] = useState<AcaoStateInterface>({ acao: 'pesquisando' })

    const btPesquisar = (item: number | string, acao: string) => {
        
        let URL_PESQUISA: string = ''
        let MSG1: string = ''
        let MSG2: string = ''

        if (acao === 'pesquisando'){
            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores?fornecedor_like='.concat(pesquisa.nome))
            MSG1 = 'Pesquisando Fornecedor ...'
            MSG2 = 'pesquisar'

        } else if (acao === 'editando'){

            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores/'.concat(item.toString()))    
            MSG1 = 'Editando Fornecedor ...'
            MSG2 = 'editar'
        }
        
        globalContexto.setMensagemState({ exibir: true, mensagem: MSG1, tipo: 'processando' })

        setTimeout(() => {
            fetch(URL_PESQUISA, {
                headers: { 'content-Type': 'application/json', },
                method: 'GET'
            }).then(rs => {
                if (rs.ok) {
                    globalContexto.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })
                    return rs.json()
                } else {
                    globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro ao'.concat(MSG2).concat(' Fornecedor!!! '), tipo: 'erro' })
                }
            }).then((DadosFornecedor) => {
                if (acao === 'pesquisando'){
                setRsPesquisa(DadosFornecedor)
                } else if (acao === 'editando'){
                    setRsFornecedor(DadosFornecedor)
                    setAcaoState({acao: 'editando'})
                }
            }).catch((e) => {
                globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor, Não foi possível'.concat(MSG2).concat(' Fornecedor!!!'), tipo: 'erro' })
            })
        }, TEMPO_PADRAO_DELAY)
    }

    const btEditar = (idFornecedor: number) => {
        globalContexto.setMensagemState({ exibir: true, mensagem: 'Editando Fornecedor ...', tipo: 'processando' })

        const URL_PESQUISA: string = URL_SERVIDOR3006.concat('/fornecedores/'.concat(idFornecedor.toString()))

        setTimeout(() => {
            console.log(URL_PESQUISA)
            fetch(URL_PESQUISA, {
                headers: { 'content-Type': 'application/json', },
                method: 'GET'
            }).then(rs => {
                if (rs.ok) {
                    globalContexto.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })
                    return rs.json()
                } else {
                    globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro ao etidar Fornecedor!!! ', tipo: 'erro' })
                }
            }).then((DadosFornecedor) => {
                setRsFornecedor(DadosFornecedor)
                setAcaoState({ acao: 'editando' })
            }).catch((e) => {
                globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor, Não foi possível editar Fornecedor!!!', tipo: 'erro' })
            })
        }, TEMPO_PADRAO_DELAY)
    }

    const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((fornecedores) =>

        <tr key={fornecedores.idFornecedor}>
            <td>{fornecedores.idFornecedor}</td>
            <td>{fornecedores.fornecedor}</td>
            <td>{fornecedores.cnpj}</td>
            <td><input type="button" value="Editar" onClick={(e) => btPesquisar(fornecedores.idFornecedor, 'editando')} /></td>
            <td><input type="button" value="Excluir" onClick={(e) => btEditar(fornecedores.idFornecedor)} /></td>
        </tr>
    )

    const btConfirmarEdicao = () => {

    }

    const btCancelar = () => {

        setAcaoState({ acao: 'pesquisando' })

    }

    const btNovoFornecedor = () => {

        setAcaoState({ acao: 'incluindo' })

    }

    return (
        <>
            <h1>Cadastro Fornecedor</h1>

            {globalContexto.loginState.logado &&
                <>
                    {acaoState.acao !== 'pesquisando' &&
                        <>
                            <InputText
                                label='Fornecedor: '
                                tipo='text'
                                valor={rsFornecedor.fornecedor}
                                id='txtFornecedor'
                                placeholder=''
                                dados={rsFornecedor}
                                campo='fornecedor'
                                setState={setRsFornecedor}
                                valida='txt'
                            />
                            <InputText
                                label='CNPJ: '
                                tipo='text'
                                valor={rsFornecedor.cnpj}
                                id='txtCNPJ'
                                placeholder=''
                                dados={rsFornecedor}
                                campo='cnpj'
                                setState={setRsFornecedor}
                                valida='cnpj'
                            />
                            <br />
                            <input
                                type="button"
                                value="Cancelar"
                                onClick={btCancelar}
                            />
                            <br />
                        </>
                    }
                    {acaoState.acao === 'pesquisando' &&
                        <>
                            <InputText
                                label='Pesquisar: '
                                tipo='text'
                                id='txtPesquisar'
                                dados={pesquisa}
                                campo='nome'
                                setState={setPesquisa}
                                valida='txt'
                            />
                            <input
                                type="button"
                                value="Pesquisar"
                                onClick={(e) =>btPesquisar(pesquisa.nome, 'pesquisando')}
                            />
                            <br />
                            <input
                                type="button"
                                value="+"
                                onClick={btNovoFornecedor}
                            />
                            <br />
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <td>Fornecedor</td>
                                        <td>CNPJ</td>
                                        <td colSpan={2}>Ações</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRsPesquisa}
                                </tbody>
                            </table>
                        </>
                    }
                    {acaoState.acao === 'editando' &&
                        <>
                            <input
                                type="button"
                                value="Confirmar Edição"
                                onClick={btConfirmarEdicao}
                            />
                        </>
                    }
                </>
            }
        </>

    )
}