import React, { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR3004 } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { AcaoStateInterface } from '../Interfaces/AcaoStateInterface';
import { ClientesInterface } from '../Interfaces/ClientesInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { PesquisaInterface } from '../Interfaces/PesquisaInterface';

const TEMPO_PADRAO_DELAY: number = 500

export default function CadastroCliente() {

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const [acaoState, setAcaoState] = useState<AcaoStateInterface>({ acao: 'pesquisando' })

    const [rsPesquisa, setRsPesquisa] = useState<Array<ClientesInterface>>([])

    const [rsClientes, setRsClientes] = useState<ClientesInterface>({
        idCliente: 0,
        cliente: '',
        cpf: ''
    })


    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const btPesquisar = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Pesquisando Cliente ...',
            tipo: 'processando'
        })

        const URL_PESQUISA: string = URL_SERVIDOR3004.concat('/clientes?cliente_like='.concat(pesquisa.nome))
        setTimeout(() => {

            fetch(URL_PESQUISA, {
                headers: { 'content-Type': 'application/json', },
                method: 'GET'
            }).then(rs => {

                if (rs.ok) {
                    globalContexto.setMensagemState({
                        exibir: false,
                        mensagem: '',
                        tipo: 'aviso'
                    })
                    return rs.json()
                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao pesquisar Cliente!!! ',
                        tipo: 'erro'
                    })
                }
            }).then((DadosClientes: Array<ClientesInterface>) => {
                setRsPesquisa(DadosClientes)

            }).catch((e) => {
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível pesquisar Cliente!!!',
                    tipo: 'erro'
                })
            })

        }, TEMPO_PADRAO_DELAY)
    }

    const btNovoCliente = () => {

        setAcaoState({ acao: 'incluindo' })
    }

    const btCancelar = () => {

        setAcaoState({ acao: 'pesquisando' })

    }
    const btEditar = (idCliente: number, acao: string) => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Pesquisando Cliente ...',
            tipo: 'processando'
        })

        const URL_PESQUISA: string = URL_SERVIDOR3004.concat('/clientes/'.concat(idCliente.toString()))
        setTimeout(() => {

            fetch(URL_PESQUISA, {
                headers: { 'content-Type': 'application/json', },
                method: 'GET'
            }).then(rs => {

                if (rs.ok) {
                    globalContexto.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })
                    return rs.json()
                } else {
                    globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro ao pesquisar Cliente!!! ', tipo: 'erro' })
                }
            }).then((DadosClientes) => {

                setRsClientes(DadosClientes)
                setAcaoState({ acao: acao })

            }).catch((e) => {
                globalContexto.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor, Não foi possível pesquisar Cliente!!!', tipo: 'erro' })
            })

        }, TEMPO_PADRAO_DELAY)
    }

    const btConfirmarEdicao = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Editando Cliente ...',
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3004.concat('/clientes/').concat(rsClientes.idCliente.toString()), {
                body: JSON.stringify(rsClientes),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'PATCH'
            }).then(rs => {
                if (rs.ok) {
                    setRsClientes({
                        cliente: '',
                        cpf: '',
                        idCliente: 0
                    })
                    aposAtualizarDados()
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Cliente editado com sucesso.',
                        tipo: 'aviso'
                    })
                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao editar Cliente !!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível editar Cliente!!!',
                    tipo: 'erro'
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const btConfirmarExclusao = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Excluindo Cliente ...',
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3004.concat('/clientes/').concat(rsClientes.idCliente.toString()), {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'DELETE'
            }).then(rs => {
                if (rs.ok) {
                    setRsClientes({
                        cliente: '',
                        cpf: '',
                        idCliente: 0
                    })
                    aposAtualizarDados()
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Cliente excluído com sucesso.',
                        tipo: 'aviso'
                    })

                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao excluir Cliente!!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível excluir Cliente!!!',
                    tipo: 'erro'
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const btConfirmarInclusao = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Incluindo Cliente ...',
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3004.concat('/clientes'), {
                body: JSON.stringify(rsClientes),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then(rs => {
                if (rs.ok) {
                    setRsClientes({
                        cliente: '',
                        cpf: '',
                        idCliente: 0
                    })
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Cliente cadastrado com sucesso.',
                        tipo: 'aviso'
                    })
                } else {

                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao incluir Cliente !!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor. Não foi possível incluir Cliente!!!',
                    tipo: 'erro'
                })
            })

        }, TEMPO_PADRAO_DELAY);

    }

    const aposAtualizarDados = () => {
        setAcaoState({ acao: 'pesquisando' })
        btPesquisar()
    }
    const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((clientes) =>

        <tr key={clientes.idCliente}>
            <td>{clientes.idCliente}</td>
            <td>{clientes.cliente}</td>
            <td>{clientes.cpf}</td>
            <td><input type="button" value="Editar" onClick={(e) => btEditar(clientes.idCliente, 'editando')} /></td>
            <td><input type="button" value="Excluir" onClick={(e) => btEditar(clientes.idCliente, 'excluindo')} /></td>
        </tr>
    )
    return (

        <>

            <h1>Cadastro Cliente</h1>
            {globalContexto.loginState.logado &&
                <>
                    {acaoState.acao === 'pesquisando' &&
                        <>
                            <InputText
                                autofocus
                                id='txtPesquisa'
                                label='Pesquisar'
                                tipo='text'
                                dados={pesquisa}
                                campo='nome'
                                setState={setPesquisa}
                                valida='txt'
                            />

                            <input
                                type="button"
                                value="Pesquisar"
                                onClick={btPesquisar}
                            />
                            <br />
                            <input
                                type="button"
                                value="+"
                                onClick={btNovoCliente}
                            />
                        </>
                    }
                    {acaoState.acao !== 'pesquisando' &&

                        <>
                            <InputText
                                autofocus
                                label='Cliente: '
                                tipo='text'
                                valor={rsClientes.cliente}
                                id='txtCliente'
                                dados={rsClientes}
                                campo='cliente'
                                setState={setRsClientes}
                                valida='txt'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
                            />
                            <InputText
                                label='CPF: '
                                tipo='text'
                                valor={rsClientes.cpf}
                                id='txtCPF'
                                dados={rsClientes}
                                campo='cpf'
                                setState={setRsClientes}
                                valida='cpf'
                                disabled={acaoState.acao === 'excluindo' ? true : false}
                            />

                            <input
                                type="button"
                                value="Cancelar"
                                onClick={btCancelar}
                            />

                        </>
                    }
                    {acaoState.acao === 'editando' &&
                        <input
                            type="button"
                            value="Confirmar Edição"
                            onClick={btConfirmarEdicao}
                        />
                    }
                    {acaoState.acao === 'excluindo' &&
                        <input
                            type="button"
                            value="Confirmar Exclusão"
                            onClick={btConfirmarExclusao}
                        />
                    }
                    {acaoState.acao === 'incluindo' &&
                        <input
                            type="button"
                            value="Confirmar Inclusão"
                            onClick={btConfirmarInclusao}
                        />
                    }
                    {
                        acaoState.acao === 'pesquisando' &&
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <td>Clente</td>
                                        <td>CPF</td>
                                        <td colSpan={2}>Ações</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRsPesquisa}
                                </tbody>
                            </table>
                        </>
                    }

                </>
            }
        </>
    )
}