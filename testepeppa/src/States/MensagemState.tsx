import React, { useState } from "react";
import { MensagemModalStateInterface } from "../Interfaces/MensagemModalStateInterface";

export default function useMensagemModalState() {

    const [mensagemModalState, setMensagemModalState] = useState<MensagemModalStateInterface>(
        {
            exibir: false,
            mensagem: '',
            tipo: 'aviso'
        }
    )

    return {mensagemModalState, setMensagemModalState}
}