import { resolve } from 'path';
import React, { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { AcaoStateInterface } from '../Interfaces/AcaoStateInterface';
import { EscolasInterface } from '../Interfaces/EscolasInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';


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
            tipo: 'processando'
        })

        return new Promise((resolve, _reject) => {
            setTimeout(() => {

                fetch(URL_SERVIDOR.concat('/escolas/'.concat(idEscola.toString())))
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
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR.concat('/escolas'), {
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
                        tipo: 'aviso'
                    })
                } else {

                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao incluir Escola !!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor. Não foi possível incluir Escola!!!',
                    tipo: 'erro'
                })
            })

        }, TEMPO_PADRAO_DELAY);

    }

    const btConfirmarEdicao = () => {

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Editando Escola ...',
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR.concat('/escolas/').concat(rsEscolas.idEscola.toString()), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'PATCH'
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
                        mensagem: 'Escola editada com sucesso.',
                        tipo: 'aviso'
                    })
                    aposAtualizarDados()

                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao editar Escola !!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível editar Escola!!!',
                    tipo: 'erro'
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const btConfirmarExclusao = () =>{

        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Excluindo Escola ...',
            tipo: 'processando'
        })

        setTimeout(() => {

            fetch(URL_SERVIDOR.concat('/escolas/').concat(rsEscolas.idEscola.toString()), {
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
                        tipo: 'aviso'
                    })
                    aposAtualizarDados()

                } else {
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao excluir Escola !!!',
                        tipo: 'erro'
                    })
                }

            }).catch(() => {

                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível excluir Escola!!!',
                    tipo: 'erro'
                })
            })
        }, TEMPO_PADRAO_DELAY);
    }

    const aposAtualizarDados = () => {
        setAcaoState({acao: 'pesquisando'})
        btPesquisar()
    }

    const btPesquisar = () => {
        globalContexto.setMensagemState({
            exibir: true,
            mensagem: 'Pesquisando Escola ...',
            tipo: 'processando'
        })        

        const URL_PESQUISA: string = URL_SERVIDOR.concat('/escola?nome_like=').concat(pesquisa.nome) 

        setTimeout(() => {

            fetch(URL_PESQUISA, { 
            headers: { 'content-Type': 'application/json',},
            method: 'GET'}).then(rs =>{
                if(rs.ok){
                    globalContexto.setMensagemState({
                        exibir: false,
                        mensagem: '',
                        tipo: 'aviso'
                    })
                    return rs.json()          
                }else{
                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro ao pesquisar Escola!!! ',
                        tipo: 'erro'
                    })  
                }
            }).then((DadosEscolas: Array<EscolasInterface>)=>{
                setRsPesquisa(DadosEscolas)
            }).catch ((e) =>{
                globalContexto.setMensagemState({
                    exibir: true,
                    mensagem: 'Erro no Servidor, Não foi possível pesquisar Escola!!!',
                    tipo: 'erro'
                })  
            })
            
        }, TEMPO_PADRAO_DELAY)

        const listRsPesquisa = !rsPesquisa ? <></> : rsPesquisa.map((escola) =>
            <tr key = {escola.idEscola}>
                <td>{escola.escola}</td>
                <td>{escola.cnpj}</td>
                <td>{escola.email}</td>
                <td><input type="button" value="Editar" onClick={(e)=> btEditarExcluir(escola.idEscola, 'editando')}/></td>
                <td><input type="button" value="Excluir" onClick={(e)=> btEditarExcluir(escola.idEscola, 'excluindo')}/></td>
            </tr>
        )
    }
    return (
        <>

            <h1>Cadastro Escolas</h1>

            {
                acaoState.acao === 'pesquisando' ?

                <div className='escola'>
                    <InputText
                        label='Escola: '
                        tipo='text'
                        valor={rsEscolas.escola}
                        id='txtEscola'
                        placeholder=''
                        dados={rsEscolas}
                        campo='escola'
                        setState={setRsEscolas}
                        valida='txt'
                    />
                    <InputText
                        label='CNPJ: '
                        tipo='text'
                        valor={rsEscolas.cnpj}
                        id='txtCNPJ'
                        placeholder=''
                        dados={rsEscolas}
                        campo='cnpj'
                        setState={setRsEscolas}
                        valida='cnpj'

                    />
                    <InputText
                        label='E-mail: '
                        tipo='text'
                        valor={rsEscolas.email}
                        id='txtEMAIL'
                        placeholder=''
                        dados={rsEscolas}
                        campo='email'
                        setState={setRsEscolas}
                        valida='email'

                    />
                    <br />

                    <input
                        id='btConfirmar'
                        type='Button'
                        value='Incluir'
                        onClick={btIncluir}

                    />

                    <input
                        id='btEditar'
                        type='Button'
                        value='Editar'
                        onClick={btEditar}

                    />
                </div> :
                <>
                </>
            }
        </>

    )

}