import { useState } from "react";
import { LoginStateInterface } from "../Interfaces/LoginStateInterface";

const loginStatePadrao = {
    nome:'',
    logado: false,
    token: '',
    autorizado: false
}

export default function useLoginState(){

    const [loginState, setLoginState] = useState<LoginStateInterface>({...loginStatePadrao})


    return { loginState, setLoginState}
}
