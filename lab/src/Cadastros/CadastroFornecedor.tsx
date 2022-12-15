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

    const [rsFornecedores, setRsFornecedores] = useState<FornecedoresInterface>({
        idFornecedor: 0,
        fornecedor: '',
        cnpj: ''
    })

    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const [rsPesquisa, setRsPesquisa] = useState<Array<FornecedoresInterface>>([])

    const [acaoState, setAcaoState] = useState<AcaoStateInterface>({ acao: 'pesquisando' })

    const btPesquisar = (item: number | string, acao: string) => {

        let URL_PESQUISA: string = URL_SERVIDOR3006.concat('/fornecedores/'.concat(item.toString()))
        let MSG1: string = 'Pesquisando fornecedor ...'
        let MSG2: string = 'pesquisar'
        let MSG3: string = ''
        let corpo: string | null = null
        let metodo: string = 'GET'

        if (acao === 'pesquisando') {

            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores?fornecedor_like='.concat(pesquisa.nome))

        } else if (acao === 'ConfirmarEdicao') {
            
            MSG1 = 'Editando fornecedor ...'
            MSG2 = 'editar'
            MSG3 = 'editado'
            corpo = JSON.stringify(rsFornecedores)
            metodo = 'PATCH'
        } else if (acao === 'ConfirmarExclusao') {
            
            MSG1 = 'Excluindo fornecedor ...'
            MSG2 = 'excluir'
            MSG3 = 'excluído'
            metodo = 'DELETE'
        }else if (acao === 'ConfirmarInclusao') {
            
            URL_PESQUISA = URL_SERVIDOR3006.concat('/fornecedores')
            MSG1 = 'Incluindo fornecedor ...'
            MSG2 = 'incluir'
            MSG3 = 'incluído'
            corpo = JSON.stringify(rsFornecedores)
            metodo = 'POST'
        }

        globalContexto.setMensagemState({ exibir: true, mensagem: MSG1, tipo: 'processando' })

        setTimeout(() => {
            fetch(URL_PESQUISA, {
                body: corpo,
                headers: { 'content-Type': 'application/json', },
                method: metodo
            }).then(rs => {
                if (rs.ok) {
                    
                    if (acao === 'ConfirmarExclusao' || acao === 'ConfirmarEdicao' || acao === 'ConfirmarInclusao') {
                        
                        btPesquisar(0, 'pesquisando')
                        setAcaoState ({acao:'pesquisando'})
                        setRsFornecedores({
                            idFornecedor:0,
                            fornecedor: '',
                            cnpj: ''
                        })
                        globalContexto.setMensagemState({ exibir: true, mensagem: 'Fornecedor '.concat(MSG3).concat(' com sucesso!!!'), tipo: 'aviso' })
                        
                    } else {
                        globalContexto.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })
                        return rs.json()
                    }
                } else {
                    globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro ao '.concat(MSG2).concat(' Fornecedor!!! '), tipo: 'erro' })
                }
            }).then((DadosFornecedor) => {
                
                if (acao === 'pesquisando') {
                    setRsPesquisa(DadosFornecedor)
                } else if (acao === 'excluindo' || acao === 'editando') {
                    setRsFornecedores(DadosFornecedor)
                    setAcaoState({ acao: acao })
                }
                
            }).catch((e) => {
                globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor, Não foi possível '.concat(MSG2).concat(' Fornecedor!!!'), tipo: 'erro' })
            })
        }, TEMPO_PADRAO_DELAY)
    }

    const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((fornecedores) =>

        <tr key={fornecedores.idFornecedor}>
            <td>{fornecedores.idFornecedor}</td>
            <td>{fornecedores.fornecedor}</td>
            <td>{fornecedores.cnpj}</td>
            <td><input type="button" value="Editar" onClick={(e) => btPesquisar(fornecedores.idFornecedor, 'editando')} /></td>
            <td><input type="button" value="Excluir" onClick={(e) => btPesquisar(fornecedores.idFornecedor, 'excluindo')} /></td>
        </tr>
    )

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
                                valor={rsFornecedores.fornecedor}
                                id='txtFornecedor'
                                placeholder=''
                                dados={rsFornecedores}
                                campo='fornecedor'
                                setState={setRsFornecedores}
                                valida='txt'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
                            />
                            <InputText
                                label='CNPJ: '
                                tipo='text'
                                valor={rsFornecedores.cnpj}
                                id='txtCNPJ'
                                placeholder=''
                                dados={rsFornecedores}
                                campo='cnpj'
                                setState={setRsFornecedores}
                                valida='cnpj'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
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
                                onClick={(e) => btPesquisar(pesquisa.nome, 'pesquisando')}
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
                                onClick={(e) => btPesquisar(rsFornecedores.idFornecedor, 'ConfirmarEdicao')}
                            />
                        </>
                    }
                    {acaoState.acao === 'excluindo' &&
                        <>
                            <input
                                type="button"
                                value="Confirmar Exclusão"
                                onClick={(e) => btPesquisar(rsFornecedores.idFornecedor, 'ConfirmarExclusao')}
                            />
                        </>
                    }
                    {acaoState.acao === 'incluindo' &&
                        <>
                            <input
                                type="button"
                                value="Confirmar inclusão"
                                onClick={(e) => btPesquisar(0, 'ConfirmarInclusao')}
                            />
                        </>
                    }
                </>
            }
        </>

    )
}