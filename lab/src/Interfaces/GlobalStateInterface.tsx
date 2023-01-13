import React from 'react'
import { LayoutStateInterface } from '../States/LayoutState'
import { LoginStateInterface } from '../States/LoginState'
import { MensagemStateInterface } from '../States/MensagemState'



export interface GlobalStateInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
    mensagemState: MensagemStateInterface
    setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
    clearMessage: () => void
}