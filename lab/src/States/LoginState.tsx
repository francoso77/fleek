import { useState } from "react";

export interface LoginStateInterface {
    nome: string
    logado: boolean
    token: string
    autorizado: boolean
}
const loginStatePadrao = {
    nome: 'Frank',
    logado: true,
    token: '',
    autorizado: true
}

export default function useLoginState() {

    const [loginState, setLoginState] = useState<LoginStateInterface>({ ...loginStatePadrao })


    return { loginState, setLoginState }
}
