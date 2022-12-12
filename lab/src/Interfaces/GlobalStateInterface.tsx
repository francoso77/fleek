import React from 'react'
import { EscolasInterface } from './EscolasInterface'
import { LayoutStateInterface } from './LayoutStateInterface'
import { LoginStateInterface } from './LoginStateInterface'
import { MensagemStateInterface } from './MensagemStateInterface'

export interface GlobalStateInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
    mensagemState: MensagemStateInterface
    setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
    escolaState: EscolasInterface
    setEscolaState: React.Dispatch<React.SetStateAction<EscolasInterface>>
    pesquisaState: Array<EscolasInterface>
    setPesquisaState: React.Dispatch<React.SetStateAction<Array<EscolasInterface>>>
    clearMessage: () => void
}