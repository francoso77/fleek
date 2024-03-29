import { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR3002 } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { EscolasInterface } from '../Interfaces/EscolasInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';
import { MensagemTipo } from '../States/MensagemState';


const TEMPO_PADRAO_DELAY: number = 500

interface PesquisaInterface { nome: string }


export default function CadastroEscola() {

    const [rsPesquisa, setRsPesquisa] = useState<Array<EscolasInterface>>([])

    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const [acaoState, setAcaoState] = useState({ acao: 'pesquisando' })

    const [rsEscolas, setRsEscolas] = useState<EscolasInterface>({
        idEscola: 0,
        escola: '',
        cnpj: '',
        email: ''
    })

    const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

    const pesquisarEscola = (idEscola: number): Promise<EscolasInterface> => {

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Pesquisando dados da Escola...',
            tipo: MensagemTipo.Warning,
            titulo: 'Pesquisa',
            modal: false,
            loading:false
        })

        return new Promise((resolve, _reject) => {
            setTimeout(() => {

                fetch(URL_SERVIDOR3002.concat('/escolas/'.concat(idEscola.toString())))
                    .then(rs => {
                        globalContexto.clearMessage()
                        resolve(rs.json())
                    })

            }, TEMPO_PADRAO_DELAY)
        })
    }

    const btNovaEscola = () => {
        setAcaoState({ acao: 'incluindo' })
    }

    const btCancelar = () => {
        setAcaoState({ acao: 'pesquisando' })
    }

    const btEditarExcluir = (idEscola: number, qualAcao: string) => {

        pesquisarEscola(idEscola).then(rs => {
            setRsEscolas(rs)
            setAcaoState({ acao: qualAcao })
        })
    }

    const btIncluir = () => {

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Incluindo escola ...',
            tipo: MensagemTipo.Warning,
            titulo: 'Inclusão',
            modal: false,
            loading:false
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3002.concat('/escolas'), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then(rs => {
                if (rs.ok) {
                    setRsEscolas({
                        escola: '',
                        cnpj: '',
                        email: '',
                        idEscola: 0
                    })
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Escola cadastrada com sucesso.',
                        tipo: MensagemTipo.ok,
                        titulo: 'Cadastrado',
                        modal: true,
                        loading:false
                    })
                } else {

                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao incluir Escola !!!',
                        tipo: MensagemTipo.Error,
                        titulo: 'Erro',
                        modal: true,
                        loading:false
                    })
                }

            }).catch(() => {
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor. Não foi possível incluir Escola!!!',
                    tipo: MensagemTipo.Error,
                    titulo: 'Erro Servidor',
                    modal: true,
                    loading:false
                })
            })

        }, TEMPO_PADRAO_DELAY);

    }

    const btConfirmarEdicao = () => {

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Editando Escola ...',
            tipo: MensagemTipo.Warning,
            titulo: 'Edição',
            modal: false,
            loading:false
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3002.concat('/escolas/').concat(rsEscolas.idEscola.toString()), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'PATCH'
            }).then(rs => {

                if (rs.ok) {
                    aposAtualizarDados()
                    setRsEscolas({
                        escola: '',
                        cnpj: '',
                        email: '',
                        idEscola: 0
                    })
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Escola editada com sucesso.',
                        tipo: MensagemTipo.ok,
                        titulo: 'Editado',
                        modal: true,
                        loading:false
                    })

                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao editar Escola !!!',
                        tipo: MensagemTipo.Error,
                        titulo: 'Erro',
                        modal: true,
                        loading:false
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível editar Escola!!!',
                    tipo: MensagemTipo.Error,
                    titulo: 'Erro Servidor',
                    modal: true,
                    loading:false
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const btConfirmarExclusao = () => {

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Excluindo Escola ...',
            tipo: MensagemTipo.Warning,
            titulo: 'Exclusão',
            modal: false,
            loading:false
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR3002.concat('/escolas/').concat(rsEscolas.idEscola.toString()), {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'DELETE'
            }).then(rs => {

                if (rs.ok) {
                    setRsEscolas({
                        escola: '',
                        cnpj: '',
                        email: '',
                        idEscola: 0
                    })
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Escola excluída com sucesso.',
                        tipo: MensagemTipo.ok,
                        titulo: 'Excluído',
                        modal: false,
                        loading:false
                    })
                    aposAtualizarDados()

                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao excluir Escola !!!',
                        tipo: MensagemTipo.Error,
                        titulo: 'Erro',
                        modal: true,
                        loading:false
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível excluir Escola!!!',
                    tipo: MensagemTipo.Error,
                    titulo: 'Erro Servidor',
                    modal: true,
                    loading:false
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const aposAtualizarDados = () => {
        setAcaoState({ acao: 'pesquisando' })
        btPesquisar()
    }

    const btPesquisar = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Pesquisando Escola ...',
            tipo: MensagemTipo.Warning,
            titulo: 'Pesquisa',
            modal: false,
            loading:false
        })

        const URL_PESQUISA: string = URL_SERVIDOR3002.concat('/escolas?escola_like='.concat(pesquisa.nome))

        setTimeout(() => {

            fetch(URL_PESQUISA, {
                headers: { 'content-Type': 'application/json', },
                method: 'GET'
            }).then(rs => {

                if (rs.ok) {
                    globalContexto.setMensagemState({
                        exibir: false,
                        mensagem: '',
                        tipo: MensagemTipo.Warning,
                        titulo: '',
                        modal: false,
                        loading:false
                    })
                    return rs.json()
                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao pesquisar Escola!!! ',
                        tipo: MensagemTipo.Error,
                        titulo: 'Erro',
                        modal: true,
                        loading:false
                    })
                }
            }).then((DadosEscolas: Array<EscolasInterface>) => {
                setRsPesquisa(DadosEscolas)

            }).catch((e) => {
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível pesquisar Escola!!!',
                    tipo: MensagemTipo.Error,
                    titulo: 'Erro Servidor',
                    modal: true,
                    loading:false
                })
            })

        }, TEMPO_PADRAO_DELAY)


    }
    const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((escola) =>

        <tr key={escola.idEscola}>
            <td>{escola.idEscola}</td>
            <td>{escola.escola}</td>
            <td>{escola.cnpj}</td>
            <td>{escola.email}</td>
            <td><input type="button" value="Editar" onClick={(e) => btEditarExcluir(escola.idEscola, 'editando')} /></td>
            <td><input type="button" value="Excluir" onClick={(e) => btEditarExcluir(escola.idEscola, 'excluindo')} /></td>
        </tr>
    )

    return (
        <>
            <h1>Cadastro Escolas</h1>
            {
                acaoState.acao === 'pesquisando' ?
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
                            onClick={btNovaEscola}
                        />
                    </>
                    : null
            }
            {
                acaoState.acao !== 'pesquisando' ?
                    <div className='escola'>
                        <InputText
                            autofocus
                            disabled={acaoState.acao === 'excluindo'}
                            label='Escola: '
                            tipo='text'
                            valor={rsEscolas.escola}
                            id='txtEscola'
                            dados={rsEscolas}
                            campo='escola'
                            setState={setRsEscolas}
                            valida='txt'
                        />
                        <InputText
                            disabled={acaoState.acao === 'excluindo'}
                            label='CNPJ: '
                            tipo='text'
                            valor={rsEscolas.cnpj}
                            id='txtCNPJ'
                            dados={rsEscolas}
                            campo='cnpj'
                            setState={setRsEscolas}
                            valida='cnpj'
                        />
                        <InputText
                            disabled={acaoState.acao === 'excluindo'}
                            label='E-mail: '
                            tipo='text'
                            valor={rsEscolas.email}
                            id='txtEMAIL'
                            dados={rsEscolas}
                            campo='email'
                            setState={setRsEscolas}
                            valida='email'
                        />
                        <br />
                        <input
                            id='btCancelar'
                            type='Button'
                            value='Cancelar'
                            onClick={btCancelar}
                        />
                    </div> : null
            }
            {
                acaoState.acao === 'excluindo' ?
                    <input
                        type="button"
                        value="Confirmar Exclusão"
                        onClick={btConfirmarExclusao}
                    />
                    : null
            }
            {
                acaoState.acao === 'editando' ?
                    <input
                        type="button"
                        value="Confirmar Edição"
                        onClick={btConfirmarEdicao}
                    />
                    : null
            }
            {
                acaoState.acao === 'incluindo' ?
                    <input
                        type="button"
                        value="Confirmar Inclusão"
                        onClick={btIncluir}
                    />
                    : null
            }
            {
                acaoState.acao === 'pesquisando' ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <td>id</td>
                                    <td>Escola</td>
                                    <td>CNPJ</td>
                                    <td>E-mail</td>
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