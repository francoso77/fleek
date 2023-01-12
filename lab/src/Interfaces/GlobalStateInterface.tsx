import React from 'react'
import { LayoutStateInterface } from '../States/LayoutState'
import { MensagemStateInterface } from '../States/MensagemState'
import { LoginStateInterface } from './LoginStateInterface'


export interface GlobalStateInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
    mensagemState: MensagemStateInterface
    setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
    clearMessage: () => void
}