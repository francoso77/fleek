import { useContext } from "react";
import { ContextoGlobal, ContextoGlobalInterface } from "../GlobalStates/ContextoGlobal";
import { MensagemTipo } from "../GlobalStates/MensagemState";
import Condicional from "../Layout/Condicional";
import "./Mensagem.css"

export default function Mensagem() {

    const { mensagemState, setMensagemState } = (useContext(ContextoGlobal) as ContextoGlobalInterface)

    const fecharJanela = () => {
        setMensagemState({ exibir: false, mensagem: '', tipo: MensagemTipo.Aviso })
    }

    if (mensagemState.exibir) {

        return (
            <>
                <div className="modal">
                    <div className="modal-content">
                        <p>{mensagemState.mensagem}</p>
                        <Condicional condicao={mensagemState.tipo === MensagemTipo.Aviso || mensagemState.tipo === MensagemTipo.Erro}>
                            <input
                                type="button"
                                value="OK"
                                onClick={fecharJanela}
                            />
                        </Condicional>
                    </div>
                </div>
            </>
        )
    } else {
        return (<></>)
    }
}