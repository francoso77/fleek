import React from 'react'
import { LayoutStateInterface } from '../States/LayoutState'
import { LoginStateInterface } from './LoginStateInterface'
import { MensagemStateInterface } from './MensagemStateInterface'

export interface GlobalStateInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
    mensagemState: MensagemStateInterface
    setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
    clearMessage: () => void
}