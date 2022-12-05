import React from 'react'
import { LayoutStateInterface } from './LayoutStateInterface'
import { LoginStateInterface } from './LoginStateInterface'

export interface GlobalStateInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
}