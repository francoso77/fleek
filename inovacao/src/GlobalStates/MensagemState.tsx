import React, { useState } from 'react'
import { AlertColor } from '@mui/material'

export enum MensagemTipo {
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  ok = 'success'
}

export interface MensagemStateInterface {
  exibir: boolean
  titulo: string
  mensagem: string
  tipo: AlertColor
  modal: boolean
}

export const MensagemStatePadrao: MensagemStateInterface = {
  exibir: false,
  titulo: '',
  mensagem: 'MENSAGEM A SER EXIBIDA',
  tipo: MensagemTipo.Info,
  modal: false
}

export default function useMensagemState () {

  const [mensagemState, setMensagemState] =
    useState<MensagemStateInterface>( MensagemStatePadrao )

  return { mensagemState, setMensagemState }

}