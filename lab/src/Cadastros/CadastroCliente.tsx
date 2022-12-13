import React, { useContext, useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { URL_SERVIDOR } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { AcaoStateInterface } from '../Interfaces/AcaoStateInterface';
import { ClientesInterface } from '../Interfaces/ClientesInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';

interface PesquisaInterface { nome: string }

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

        const URL_PESQUISA: string = URL_SERVIDOR.concat('/clientes?cliente_like='.concat(pesquisa.nome))
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

    const btEditar = (idCliente: number, acao: string) => {

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

            {globalContexto.loginState.logado && acaoState.acao === 'pesquisando' ?
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
                </> : null
            }
            {globalContexto.loginState.logado && acaoState.acao !== 'pesquisando' ?

                <div>
                    <InputText
                        autofocus
                        label='Cliente: '
                        tipo='text'
                        valor={rsClientes.cliente}
                        id='txtCliente'
                        placeholder=''
                        dados={rsClientes}
                        campo='cliente'
                        setState={setRsClientes}
                        valida='txt'
                    />
                    <InputText
                        label='CPF: '
                        tipo='text'
                        valor={rsClientes.cpf}
                        id='txtCPF'
                        placeholder=''
                        dados={rsClientes}
                        campo='cpf'
                        setState={setRsClientes}
                        valida='cpf'

                    />
                    <br />

                    <InputButton
                        id='btIncluir'
                        tipo='Button'
                        valor='Incluir'
                        action='inlcuir'

                    />
                </div> : null}
                {
                acaoState.acao === 'pesquisando' ?
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
                    : null
            }
        </>

    )
}