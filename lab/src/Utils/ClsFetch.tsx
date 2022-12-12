import React, { useContext, useState } from 'react'
import { URL_SERVIDOR } from '../Config/Setup'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'
import { EscolasInterface } from '../Interfaces/EscolasInterface'

const TEMPO_PADRAO_DELAY: number = 500

export default function ClsFetch<T> (
    { acao,
      idEscola,
      method,
      funcao  
    
    }) {


    const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    const [rsEscolas, setRsEscolas] = useState<EscolasInterface>({
            idEscola: 0,
            escola: '',
            cnpj: '',
            email: ''
    })



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
                        //aposAtualizarDados()

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
