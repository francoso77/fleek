import { useState } from 'react'

export enum MensagemTipo {
  Aviso = 1,
  Erro = 2
}

export interface MensagemStateInterface {
  mensagem: string
  tipo: number
  exibir: boolean
}

export default function useMensagemState () {

  const [mensagemState, setMensagemState] = useState<MensagemStateInterface>( {
      mensagem: '',
      tipo: MensagemTipo.Aviso,
      exibir: false
    } )

  return { mensagemState, setMensagemState }

}