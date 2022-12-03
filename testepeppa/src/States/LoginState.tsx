import React, { useState } from "react";
import { LoginStateInterface } from "../Interfaces/LoginStateInterface";

export default function useLoginState() {

    const [loginState, setLoginState] = useState<LoginStateInterface>(
        {
            usuario: 'frank ',
            logado: true
        }
    )

    return {loginState, setLoginState}
}