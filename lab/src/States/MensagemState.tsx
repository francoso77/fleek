import React, { useState } from 'react'
import { MensagemStateInterface } from '../Interfaces/MensagemStateInterface'

export default function useMensagemState() {

    const [mensagemState, setMensagemState] = useState<MensagemStateInterface>({
        exibir: false,
        mensagem: '',
        tipo: 'aviso'
    })

    return {mensagemState, setMensagemState}
}