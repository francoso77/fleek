import React, { useContext } from 'react'
import { URL_SERVIDOR3002 } from '../Config/Setup'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import { FetchInterface } from '../Interfaces/FecthInterface'
import { EscolasInterface } from '../Interfaces/EscolasInterface'


export default function ClsFetch<T>({
    acao,
    idEscola,
    nome,
}: FetchInterface) {
    
    const TEMPO_PADRAO_DELAY: number = 500
    
    var msg1: string = ''
    var corpo: string = ''
    var metodo: string = ''
    var msg2: string = ''
    var msg3: string = ''
    var caminho: string = ''

    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const ESCOLAS = globalContexto.escolaState

    if (acao === 'editando') {
        msg1 = 'Editando'
        corpo = JSON.stringify(ESCOLAS)
        metodo = 'PATCH'
        msg2 = 'editados'
        msg3 = 'editar'
        caminho = URL_SERVIDOR3002.concat('/escolas/').concat(idEscola.toString())
    } else if (acao === 'excluindo') {
        msg1 = 'Excluindo'
        corpo = ''
        metodo = 'DELETE'
        msg2 = 'excluidos'
        msg3 = 'excluir'
        caminho = URL_SERVIDOR3002.concat('/escolas/').concat(idEscola.toString())
    } else if (acao === 'incluindo') {

        msg1 = 'Incluindo'
        corpo = JSON.stringify(ESCOLAS)
        metodo = 'POST'
        msg2 = 'incluidos'
        msg3 = 'incluir'
        caminho = URL_SERVIDOR3002.concat('/escolas')
    } else {
        msg1 = 'Pesquisando'
        corpo = ''
        metodo = 'GET'
        msg2 = 'pesquisados'
        msg3 = 'pesquisar'
        caminho = URL_SERVIDOR3002.concat('/escolas?escola_like='.concat(nome))
    }

    globalContexto.setMensagemState({
        exibir: true,
        mensagem: msg1.concat(' dados ...'),
        tipo: 'processando'
    })

    return (
        <>
            setTimeout(() {

                fetch(caminho, {
                    body: corpo,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    method: metodo
                }).then(rs => {

                    if (rs.ok && acao !== 'pesquisando') {
                        globalContexto.setEscolaState({
                            escola: '',
                            cnpj: '',
                            email: '',
                            idEscola: 0
                        })
                        globalContexto.setMensagemState({
                            exibir: true,
                            mensagem: 'Dados '.concat(msg2).concat(' com sucesso.'),
                            tipo: 'aviso'
                        })
                        //aposAtualizarDados()

                    } else if (rs.ok && acao === 'pesquisando') {

                        globalContexto.setMensagemState({
                            exibir: false,
                            mensagem: '',
                            tipo: 'aviso'
                        })
                        return rs.json()
                    } else {
                        globalContexto.setMensagemState({
                            exibir: true,
                            mensagem: 'Erro ao '.concat(msg3).concat(' dados !!!'),
                            tipo: 'erro'
                        })
                    }

                }).then((DadosEscolas: Array<EscolasInterface>) => {
                    globalContexto.setPesquisaState(DadosEscolas)
                }).catch(() => {

                    globalContexto.setMensagemState({
                        exibir: true,
                        mensagem: 'Erro no Servidor, Não foi possível '.concat(msg3).concat(' os dados!!!'),
                        tipo: 'erro'
                    })
                })
            }, TEMPO_PADRAO_DELAY)
        </>
    )
}
