import { useState } from "react";
import { LoginStateInterface } from "../Interfaces/LoginStateInterface";

const loginStatePadrao = {
    nome:'Frank',
    logado: true,
    token: '',
    autorizado: true
}

export default function useLoginState(){

    const [loginState, setLoginState] = useState<LoginStateInterface>({...loginStatePadrao})


    return { loginState, setLoginState}
}
