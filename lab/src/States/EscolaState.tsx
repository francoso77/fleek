import React, { useState } from "react";
import { EscolasInterface } from "../Interfaces/EscolasInterface";

export default function useEscolaState(){

    const [escolaState, setEscolaState] = useState<EscolasInterface>({
        idEscola: 0,
        escola: '',
        cnpj: '',
        email: ''
    })


    return { escolaState, setEscolaState}
}
